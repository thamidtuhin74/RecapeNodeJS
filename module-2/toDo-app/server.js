const http = require('http');
// console.log(http);

const path =  require('path');
const fs = require('fs');

const dbfilepath  =  path.join(__dirname, './db/todo.json');
console.log(dbfilepath);


const toDos = fs.readFileSync(dbfilepath, {encoding: 'utf-8'});
const server = http.createServer((req, res)=>{

    const url = new URL(req.url, `http://${req.headers.host}`);

    const pathName = url.pathname;

    console.log(url, "url")

    console.log(req.url, req.method);
    // res.end("Welcome to ToDo App server");

    if(req.url === "/todos" && req.method === "GET"){
       res.writeHead(201, {
        // "content-type" : "text/plain",
        "content-type" : "application/json",
        "email": "admin@gmail.com"
       });
        res.end(toDos);
    }
    else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.writeHead(202,{
            "content-type" : "application/json"
        })
        let data = "";
        req.on('data', (chank)=>{
            data = data + chank;
        })
        req.on('end',()=>{
            const {id, title, body} = JSON.parse(data);

            const createdAt = new Date().toLocaleString();

             pargedAllTodo = JSON.parse(toDos)

            pargedAllTodo.push({id, title, body,createdAt});
            // console.log(pargedAllTodo)

            fs.writeFileSync(dbfilepath, JSON.stringify(pargedAllTodo, null, 2), {encoding: 'utf-8'});

            res.end(JSON.stringify({id, title, body,createdAt}));
        })



        
    }
    else if( pathName ==='/todos/update-todo' && req.method === "PATCH"){
        const title = url.searchParams.get("title")
        console.log(title);
        let data = "";
        req.on("data", (chank)=>{
            data = data + chank;
        })
        req.on("end", ()=>{
            const {body} = JSON.parse(data)
            console.log(body);

            const pargedAllTodo = JSON.parse(toDos);

            const singleTodoIndex = pargedAllTodo.findIndex(todo=> todo.title === title); 

            pargedAllTodo[singleTodoIndex].body = body;

            fs.writeFileSync(dbfilepath, JSON.stringify(pargedAllTodo,null , 2), {encoding: "utf-8"})

            // res.end(`Updateed Todo ${title} , ${body}`);
            res.end(
                JSON.stringify(
                    {
                        title, body, createdAt: pargedAllTodo[singleTodoIndex].createdAt
                    }
                )
            );

        })

        
        

        res.writeHead(202,{
            "content-type" : "application/json"
        })
        
    }
    else if( pathName ==='/todos/update-todo' && req.method === "DELETE"){
        res.writeHead(202,{
            "content-type" : "application/json"
        })
        
        const title = url.searchParams.get("title")
        console.log(title);
        
        const pargedAllTodo = JSON.parse(toDos);

        const singleTodoIndex = pargedAllTodo.findIndex(todo=> todo.title === title); 

        if(singleTodoIndex<0){
            res.end(`Your given TODO "${title}" is not avaiable`);
        }
        else{
            console.log("singleTodoIndex : " + singleTodoIndex)

            const deletedAt = new Date().toLocaleString();

            pargedAllTodo.splice(singleTodoIndex, 1);

            fs.writeFileSync(dbfilepath, JSON.stringify(pargedAllTodo,null , 2), {encoding: "utf-8"})

            // res.end(`Updateed Todo ${title} , ${body}`);
            res.end(
                {
                    title, deletedAt
                }
            );
        }
        
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