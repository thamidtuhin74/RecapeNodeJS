import express, { Application, Request, Response } from "express";
import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, "../../../db/todo.json")
const todos = fs.readFileSync(filePath, {encoding: 'utf-8'});

export const todosRouter = express.Router();

todosRouter.get('/', (req: Request, res: Response)=>{
    console.log(req.query)
    const {title} = req.query;
    res.json({
        "sms": "From Express Router",
        todos
    })
    console.log(title)
})
todosRouter.get('/:title', (req: Request, res: Response)=>{
    console.log(req.params)
    // const {title} = req.query;
    
    res.json(req.params)
})
todosRouter.post('/create-todo', (req: Request, res: Response)=>{
    console.log(req.body)
    const {title, body, createdAt} = req.body;
    

    res.json({title, body, createdAt});
})