const EventEmitter = require('events');
const event = new EventEmitter();

// event.on("sayMyName", ()=>{
//     console.log("Your name is Subham");
// })
// event.emit("sayMyName");


event.on("checkpage", (sc, msg)=>{
    console.log(`status code is ${sc} and your page is ${msg}`);
})
event.emit("checkpage", 200, "ok");