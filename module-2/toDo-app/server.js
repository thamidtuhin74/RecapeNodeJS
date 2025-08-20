const http = require('http');
// console.log(http);


const toDos = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Build an API", completed: true },
    { id: 3, title: "Practice daily", completed: false }
  ]
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    // res.end("Welcome to ToDo App server");

    if(req.url === "/todos" && req.method === "GET"){
       res.writeHead(201, {
        // "content-type" : "text/plain",
        "content-type" : "application/json",
        "email": "admin@gmail.com"
       });
        res.end(JSON.stringify(toDos));
    }
    else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.writeHead(202,{
            "content-type" : "text/html"
        })
        res.end(`<h2>Add a ne ToDo</h2>`)
    }
    else{
        res.end("Route not found;")
    }
})

server.listen(5000, "127.0.0.1", ()=>{
    console.log("✅ Server Lisening at port 5000")
})

/*

/todos : Get all the todos;
/todos/create-todo : Create a todo

*/