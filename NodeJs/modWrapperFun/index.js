// we write code like this.
const name = "jarviz";
console.log(name);
// console.log( __dirname);
// console.log(__filename);

// but behind the scene it is like this in wrapper function.
// node convert code into wrapper function
// these parameters are local or private not global.
(function (exports, require, module, __filename, __dirname) {
    const name = "jarviz";
    console.log(name);
    console.log(name); 
    console.log(name);
});
//another example 
(function (exports, require, module, __filename, __dirname) {
    const fs = require('fs');

    const name = "jarviz1";
    console.log(name);

    module.exports = {};
});

// in Advance JS "IIFE" example
// IIFE (Immediately Invoked Function Expression) 
// it act like a private not global. We didn't define outside the function.it always work in a function.


(function () {
    var a = "Junaid";
    console.log(a);
})();