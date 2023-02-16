const path = require('path');

// console.log(path.dirname('E:/node js tutorials/PathModule/index.js'));
// console.log(path.extname('E:/node js tutorials/PathModule/index.js'));
// console.log(path.basename('E:/node js tutorials/PathModule/index.js'));

// The path.parse() method returns an object whose properties represent significant elements of the path. Trailing directory separators are ignored, see path.sep.
console.log(path.parse('E:/node js tutorials/PathModule/index.js'));

const myPath = path.parse(('E:/node js tutorials/PathModule/index.js'));
console.log(myPath.name);
console.log(myPath.root);
console.log(myPath.dir);

