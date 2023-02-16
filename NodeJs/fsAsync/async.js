const fs = require('fs');

const data = fs.readFileSync('read.txt','UTF-8');
// console.log(data);
// console.log("sync in on the way");

// Async method.
fs.readFile('read.txt','UTF-8',(err,asyncData)=>{
    console.log(asyncData);
    console.log(err);
});
console.log("Async is on the way dude.");