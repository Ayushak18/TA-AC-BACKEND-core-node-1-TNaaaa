let os = require('os');
let { readFile, unlink } = require('fs');

console.log('Welcome to Node js ');

console.log(os.cpus());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());

let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write('This is in buffer');
console.log(buff1.toString());

// Blocking code
console.log('THis is the example of blocking code');

// non Blocking code
setTimeout(() => {
  console.log('This is the non blocking code');
}, 1000);
