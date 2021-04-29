let http = require('http');
let fs = require('fs');

let server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === '/') {
    // fs.createReadStream('./code/index.html').pipe(res);
    fs.readFile('./index.html', (error, content) => {
      if (error) {
        console.log(error);
      } else {
        res.end(content);
      }
    });
  }
}

server.listen(4000, () => {
  console.log('Server is up');
});
