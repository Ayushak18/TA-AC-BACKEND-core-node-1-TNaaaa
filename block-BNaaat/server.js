let http = require('http');
let fs = require('fs');

let server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    fs.readFile('./node.html', (error, content) => {
      if (error) {
        console.log(error);
      } else {
        res.end(content);
      }
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('Server is up');
});
