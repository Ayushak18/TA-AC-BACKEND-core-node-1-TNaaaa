let http = require('http');

let server = http.createServer(handleReq);

function handleReq(req, res) {
  res.end('THis is from server');
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
}

server.listen(3000, () => {
  console.log('Server Up');
});
