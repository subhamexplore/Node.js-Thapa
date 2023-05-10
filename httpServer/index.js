const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url == '/'){
        res.end('Hello from the others sides');
    }
    else if(req.url=='/about'){
        // res.write('Hello from the AboutUs sides');
        res.end('Hello from the AboutUs sides');
    }
    else{
        res.writeHead(404, "Content-Type: text/html" );
        res.end("<h1>error 404 not found.</h1>")
    }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log("listening to port no 8000");
});