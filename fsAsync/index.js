const fs = require('fs');

fs.writeFile('read.txt', 'good morning!', 
(err)=>{
    console.log('files are created!');
    console.log(err);
});