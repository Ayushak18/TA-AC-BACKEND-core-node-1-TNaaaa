let http = require('http');

let server = http.createServer(handleServer);

function handleServer(req, res) {
  res.statusCode = 201;
  res.setHeader = { 'Content-Type': 'text/html' };
  res.end('<h1>Node JS</h1>');
}

server.listen(4444, () => {
  console.log('Server is Up');
});
