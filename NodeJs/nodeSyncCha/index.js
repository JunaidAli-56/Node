const fs = require('fs');

// Make dir or folder
fs.mkdirSync('Jarviz');

//make file bio.txt
fs.writeFileSync('Jarviz/bio.txt','this is my practice,' );
// appened something in bio.txt
fs.appendFileSync('Jarviz/bio.txt',' hi Jarviz...');

// With buffer get data in string
const data = fs.readFileSync('Jarviz/bio.txt');
//console.log(data);
orgData = data.toString();
//console.log(orgData);

// Without buffer get data in string (utf is unicode)
const data1 = fs.readFileSync('Jarviz/bio.txt','utf-8');
// console.log(data1);

// for rename file bio.txt to mybio.txt
fs.renameSync('Jarviz/bio.txt','Jarviz/mybio.txt');

// for delete the file;
// fs.unlinkSync('Jarviz/mybio.txt')

// for delete the file folder
// fs.rmdirSync('Jarviz');