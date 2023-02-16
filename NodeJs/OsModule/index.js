const os = require('os');

// base 32-bit or 64-bit
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());


// Free memory
console.log(os.freemem());

// With the help of template literal. converting bytes into gigabyte
const freememory = os.freemem();
console.log(`${freememory / 1024 / 1024 / 1024}`);

const totalmemory = os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024}`);
