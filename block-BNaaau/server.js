let http = require('http');
let fs = require('fs');

let serverOne = http.createServer(handleServerOne);
let serverTwo = http.createServer(handleServerTwo);
let serverThree = http.createServer(handleServerThree);
let serverFour = http.createServer(handleServerFour);
let serverFive = http.createServer(handleServerFive);
let serverSix = http.createServer(handleServerSix);
let serverSeven = http.createServer(handleServerSeven);
let serverEight = http.createServer(handleServerEight);
let serverNine = http.createServer(handleServerNine);

function handleServerOne(req, res) {
  console.log('This is request object');
  console.log(req);
  console.log('This is response object');
  console.log(res);
}

function handleServerTwo(req, res) {
  res.end('My First server in NodeJS');
}

function handleServerThree(req, res) {
  console.log(req.headers);
  console.log(req.headers['user-agent']);
}

function handleServerFour(req, res) {
  console.log(req.url, req.method);
  res.end(req.url, req.method);
}

function handleServerFive(req, res) {
  //   res.end(req.header);
}

function handleServerSix(req, res) {
  res.statusCode = 202;
  res.end('From server 6');
}

function handleServerSeven(req, res) {
  res.setHeader('Content-type', 'text/html');
  res.end(`<h3>Welcome to Altcampus</h3>`);
}

function handleServerEight(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html',
  });
  res.end(`<h3>Welcome to altcampus using write head</h3>`);
}

function handleServerNine(req, res) {
  res.writeHead(200, {
    'Content-type': 'application/json',
  });
  res.end(`{ success: true, message: 'Welcome to Nodejs' }`);
}

serverOne.listen(5000, () => {
  console.log('Server One is Up');
});

serverTwo.listen(5100, () => {
  console.log('Server Two is Up');
});

serverThree.listen(5555, () => {
  console.log('Server Three is up');
});

serverFour.listen(5566, () => {
  console.log('Server four is up');
});

serverFive.listen(7000, () => {
  console.log('Server 5 listening on port 7000');
});

serverSix.listen(3333, () => {
  console.log('Server 6 is up');
});

serverSeven.listen(8000, () => {
  console.log('server seven is up');
});

serverEight.listen(8001, () => {
  console.log('Server eight is up');
});

serverNine.listen(8888, () => {
  console.log('Server nine is up');
});
