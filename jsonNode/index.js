const fs = require('fs');
const bioData = {
    name: "subham",
    age: 21,
    channel: "subhamExplore",
};
// console.log(bioData.age);
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// const objData = JSON.parse(jsonData);
// console.log(objData);

// const jsonData = JSON.stringify(bioData);
// fs.writeFile('json1.json', jsonData, (err)=>{
//     console.log('done');
// });
fs.readFile('json1.json', 'UTF-8', (err, data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})
