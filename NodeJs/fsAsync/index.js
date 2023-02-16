const fs = require('fs');

// async method of creting a file.
fs.writeFile("read.txt",'Today is Awesome day.',(error)=>{
// console.log("File is created");
// console.log(error);
});

// add something
fs.appendFile("read.txt",' Really today is awesome',(error)=>{
// console.log("task completed");
// console.log(error);
});

//read file 
fs.readFile('read.txt','UTF-8',(error,data)=>{
// console.log(data);
// console.log(error);
});