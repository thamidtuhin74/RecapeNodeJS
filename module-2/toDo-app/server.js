const http = require('http');
// console.log(http);

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method);
    // res.end("Welcome to ToDo App server");

    if(req.url === "/todos" && req.method === "GET"){
        res.end("Get Al Todos;");
    }
    else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.end("Created a Todo;")
    }
    else{
        res.end("Route not found;")
    }
})

server.listen(5000, "127.0.0.1", ()=>{
    console.log("✅ Server Lisening at port 5000")
})