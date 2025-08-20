import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
const app: Application = express()

app.use(express.json()); //middlleware & a parser ; Converting JSON to Object

const filePath = path.join(__dirname, "../../db/todo.json")
const todos = fs.readFileSync(filePath, {encoding: 'utf-8'});

app.get('/', (req: Request, res: Response)=>{
    res.send("Welcome to ToDo Server");
})
app.get('/todos', (req: Request, res: Response)=>{
    console.log(req.query)
    const {title} = req.query;
    res.json(todos)
    console.log(title)
})
app.get('/todos/:title', (req: Request, res: Response)=>{
    console.log(req.params)
    // const {title} = req.query;
    
    res.json(req.params)
})
app.post('/todos/create-todo', (req: Request, res: Response)=>{
    console.log(req.body)
    const {title, body, createdAt} = req.body;
    

    res.json({title, body, createdAt});
})

// app - router handleing, middleware
// server - server handleing - StaticRange, stop, 

export default app;