const fs = require('fs');
// fs.mkdirSync('subham');  
fs.writeFileSync('subham/bio.txt', 'hiiiiiiiii to bioooo!')
const data = fs.readFileSync('subham/bio.txt', 'utf8');
console.log(data);
fs.renameSync('subham/bio.txt', 'subham/bioo.txt');
fs.unlinkSync('subham/bioo.txt');
fs.rmdirSync('subham');