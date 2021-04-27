let http = require('http');

function handleReqRes(req, res) {
  res.end('Welcome to node server ');
}

let server = http.createServer(handleReqRes);

server.listen(4000, () => {
  console.log('Server is up at 4000');
});
