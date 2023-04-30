const { router, server, } = require('./src/lib/serve.js');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Erro ao carregar o arquivo ${filePath}`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

router.get('/api', (req, res) => {
  const data = {
    message: 'Hello, API!',
    timestamp: new Date().getTime()
  };

  const jsonData = JSON.stringify(data);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(jsonData);
});


const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});



