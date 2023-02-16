console.log("In this video we are creating module and import or export it");


// const oper = require('./oper.js');
// console.log(oper);
// console.log(oper.add(5,5));
// console.log(oper.sub(10,5));

// With Object destructoring and it is benefical.
const { add, sub, mult, name } = require('./oper.js');
console.log(add(5, 5));
console.log(sub(10, 5));
console.log(mult(7, 5));
console.log(name);
