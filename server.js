const http = require('http');
const fs = require('fs');
const path = require('path');


const router = {
  routes: {},
  get: function(path, handler) {
    this.routes[path] = { handler, method: 'GET' };
  },
  post: function(path, handler) {
    this.routes[path] = { handler, method: 'POST' };
  },
  delete: function(path, handler) {
    this.routes[path] = { handler, method: 'DELETE' };
  },
  put: function(path, handler) {
    this.routes[path] = { handler, method: 'PUT' };
  }
};

const middleware = (req, res) => {
  const url = req.url;
  const method = req.method;

  // Verifica se há um handler definido para a rota e método
  const route = router.routes[url];
  if (route && route.method === method) {
    route.handler(req, res);
  } else {
    // Serve os arquivos estáticos
    const filePath = path.join(__dirname, url);
    serveStaticFile(filePath, res);
  }
};

const server = http.createServer((req, res) => {
  middleware(req, res);
});


router.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      sendErrorResponse(res, 500, `Erro ao carregar o arquivo ${filePath}`);
    } else {
      sendResponse(res, 200, 'text/html', content);
    }
  });
});




function sendNotFoundResponse(res) {
  sendResponse(res, 404, 'text/plain', 'Página não encontrada!');
}

function sendErrorResponse(res, statusCode, message) {
  sendResponse(res, statusCode, 'text/plain', message);
}

function sendResponse(res, statusCode, contentType, content) {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(content, 'utf-8');
}

function getContentType(extname) {
  switch (extname) {
    case '.js':
      return 'text/javascript';
    case '.css':
      return 'text/css';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpeg';
    case '.gif':
      return 'image/gif';
    default:
      return 'text/plain';
  }
}

function serveStaticFile(filePath, res) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        sendNotFoundResponse(res);
      } else {
        sendErrorResponse(res, 500, `Erro ao carregar o arquivo ${filePath}`);
      }
    } else {
      const extname = path.extname(filePath);
      const contentType = getContentType(extname);
      sendResponse(res, 200, contentType, content);
    }
  });
}


const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});