import express, { Application, Request, Response } from "express";
import fs from 'fs'
import path from 'path'
import { client } from "../config/mongodb";

// const filePath = path.join(__dirname, "../../../db/todo.json")
// const todos = fs.readFileSync(filePath, {encoding: 'utf-8'});

export const todosRouter = express.Router();

todosRouter.get('/',  async (req: Request, res: Response)=>{
    console.log(req.query)
    const {title} = req.query;
    // const db = await client.db("toDoDB");
//     const collection = await db.collection("todos").insertOne({
//     "title": "Learn Node.js",
//     "body": "Buiild ToDo App Backend",
//     "createdAt": "2025-08-20T08:05:17.143Z"
//   })
//     console.log(collection, "collections");
    const db = await client.db("toDoDB");
    const collection = await db.collection("todos");

    const cousor = collection.find({});
    const todos = await cousor.toArray();

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
todosRouter.post('/create-todo', async(req: Request, res: Response)=>{
    console.log(req.body)
    const {title, body, createdAt} = req.body;

    const db = await client.db("toDoDB");
    const collection = await db.collection("todos");

    collection.insertOne({
        title: title,
        body: body,
        createdAt: createdAt
    })

    const cousor = collection.find({});
    const todos = await cousor.toArray();
    

    res.json(todos);
})