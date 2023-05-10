const http = require('http');
const fs = require('fs');

// const data = fs.readFile(`${__dirname}/userAPI/userapi.json`, "utf-8")
// const parseData = JSON.parse(data);

//one time API call...

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url == '/'){
        res.end('Hello from the others sides');
    }
    else if(req.url=='/about'){
        // res.write('Hello from the AboutUs sides');
        res.end('Hello from the AboutUs sides');
    }
    else if(req.url=='/userapi'){
        fs.readFile(`${__dirname}/userAPI/userapi.json`, "utf-8", (err, data)=>{
            res.writeHead(200, {'Content-Type': 'application/json'})
            console.log(data);
            const parseData = JSON.parse(data);
            res.end(parseData.results[0].name.title);
        })
    }
    else{
        res.writeHead(404, "Content-Type: text/html" );
        res.end("<h1>error 404 not found.</h1>")
    }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log("listening to port no 8000");
});