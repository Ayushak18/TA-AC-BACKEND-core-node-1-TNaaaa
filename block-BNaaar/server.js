let http = require('http');

let server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end('Welcome to Homepage');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end('<h2>This is all about NodeJs</h2>');
  } else if (req.url === '/about' && req.method === 'POST') {
    res.writeHead(200, { 'Content-type': 'json/text' });
    res.end('{message:`This is a post request`}');
  }
}

server.listen(5000, () => {
  console.log('Server is Up');
});
