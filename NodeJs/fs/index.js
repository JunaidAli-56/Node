// console.log("hello jarviz: Welcome in VS");
 
// Core modules lecture.

// const name = "Jarviz AI";
// console.log(name);

// fs means file System Sync fs

const fs = require('fs');
// Creating a new file
fs.writeFileSync('read.txt','Jarviz create the file with the help of node module');
fs.writeFileSync('read.txt', 'CodeWithJarviz, Jarviz create the file with the help of node module');
fs.appendFileSync('read.txt' , 'Jarviz successfully created a new file with the help of node.js');

// Buffer is data type.
// Buffer is mainly used to store data in binary form.
// While reading form a file or receiving  packets over the network.

// const buf_data= fs.readFileSync('read.txt');
// console.log(buf_data);

// org_data = buf_data.toString();
// console.log(org_data);

// To rename a file.
fs.renameSync('read.txt','readWrite.txt');