import chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.green('Hello world!'));
// console.log(chalk.green.underline.inverse('Hello world!'));

const res = validator.isEmail('jarviz@uaf.com');
// console.log(res);

// ternary operator "?,:" ; 
// '?' present 'if' and ':' present 'else'
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));