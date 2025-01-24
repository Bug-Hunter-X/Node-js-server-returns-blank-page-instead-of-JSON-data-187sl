const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  const jsonData = {
    message: 'Hello from Node.js',
  };
  response.end(JSON.stringify(jsonData)); // Fixed: Added response.end()
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});