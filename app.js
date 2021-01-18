var express = require("express");
var server = express();

server.get("/" ,(req , res, next)=>{
    console.log("someone is asking something");
    res.send("do you need water");
})
server.listen(4000, ()=>{
    console.log("server is running");
});