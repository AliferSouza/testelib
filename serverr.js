const http = require('http');
const fs = require('fs');
const path = require('path');

const router = {
  routes: {},
  addRoute: function(method, path, handler) {
    if (!this.routes[path]) {
      this.routes[path] = {};
    }
    this.routes[path][method] = handler;
  },
  get: function(path, handler) {
    this.addRoute('GET', path, handler);
  },
  post: function(path, handler) {
    this.addRoute('POST', path, handler);
  },
  delete: function(path, handler) {
    this.addRoute('DELETE', path, handler);
  },
  put: function(path, handler) {
    this.addRoute('PUT', path, handler);
  }
};

const middleware = (req, res) => {
  const url = req.url;
  const method = req.method;

  let foundRoute = false;

  // Loop through the routes and find a match for the method and path
  for (const routePath in router.routes) {
    const route = router.routes[routePath];

    // Check if the method matches
    if (route[method]) {
      const regexPath = routePath.replace(/\/:\w+/g, '/(\\w+)');
      const match = url.match(new RegExp(`^${regexPath}$`));

      if (match) {
        foundRoute = true;

        // Extract the parameter values from the URL
        const params = match.slice(1);

        // Add the params object to the request object
        req.params = {};
        const paramNames = routePath.match(/:(\w+)/g) || [];
        paramNames.forEach((paramName, index) => {
          const key = paramName.slice(1);
          const value = params[index];
          req.params[key] = value;
        });

        // Call the route handler with the request and response objects
        route[method](req, res);
        break;
      }
    }
  }

  // If no route is found, serve static files
  if (!foundRoute) {
    const filePath = path.join(__dirname, url);
    serveStaticFile(filePath, res);
  }
};

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
        sendErrorResponse(res, 500, `Erro ao carregar o arquivo ${filePath}: ${err.message}`);
      }
    } else {
      const extname = path.extname(filePath);
      const contentType = getContentType(extname);
      sendResponse(res, 200, contentType, content);
    }
  });
}

const server = http.createServer((req, res, next) => {
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

router.post('/users/:id', (req, res) => {
  const userId = req.params.id;  
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const requestBody = JSON.parse(body);

    // Use o corpo da requisição em seu código
    console.log(userId); // Use userId em seu código ou faça qualquer outra operação com ele
    console.log(requestBody); // Use o corpo da requisição em seu código ou faça qualquer outra operação com ele

    // Retorne uma resposta
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Requisição POST recebida com sucesso' }));
  });
});



const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
