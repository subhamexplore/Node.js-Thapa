const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.red.underline.inverse('hello'));

const res = validator.isEmail("subhammurt@gmail.com");
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));