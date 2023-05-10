const fs = require('fs');
fs.writeFileSync('read.txt', 'Welcome to read.txt file!');
fs.appendFileSync('read.txt', ' ye loo append ho gaya!!!')

const buffer = fs.readFileSync('read.txt');
const newData = buffer.toString();
console.log(newData);

fs.renameSync('read.txt', 'red.txt');
