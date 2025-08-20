import express, { Application, Request, Response } from "express";
import fs from 'fs'
import path from 'path'
import { client } from "../config/mongodb";
import { ObjectId } from "mongodb";

// const filePath = path.join(__dirname, "../../../db/todo.json")
// const todos = fs.readFileSync(filePath, {encoding: 'utf-8'});

export const todosRouter = express.Router();

todosRouter.get('/',  async (req: Request, res: Response)=>{
    console.log(req.query)
    const {id} = req.query;
    console.log(id)
    // const db = await client.db("toDoDB");
//     const collection = await db.collection("todos").insertOne({
//     "title": "Learn Node.js",
//     "body": "Buiild ToDo App Backend",
//     "createdAt": "2025-08-20T08:05:17.143Z"
//   })
//     console.log(collection, "collections");
    const db = await client.db("toDoDB");
    const collection = await db.collection("todos");

    if(id){
        const todo = await collection.findOne({_id: new ObjectId(id as string)});

        res.json(
            todo
        )
    }
    else{
        const cousor = collection.find({});
        const todos = await cousor.toArray();

        res.json({
            "sms": "From Express Router",
            todos
        })
    }

    
    // console.log(title)
})
todosRouter.get('/:_id', async(req: Request, res: Response)=>{
    console.log(req.params);
    const {_id} = req.params;
    // const {title} = req.query;
    console.log(_id);

    const db = await client.db("toDoDB");
    const collection = await db.collection("todos");
    
    const todo = await collection.findOne({_id: new ObjectId(_id)});

    res.json(todo)
})
todosRouter.put('/update-todo/:_id', async(req: Request, res: Response)=>{
    console.log(req.params);
    const {_id} = req.params;
    // const {title} = req.query;
    console.log(_id);

    const {body} = req.body;

    const updateFields = {
        body: body
    }

    const db = await client.db("toDoDB");
    const collection = await db.collection("todos");
    
    await collection.updateOne({_id: new ObjectId(_id)}, {$set: updateFields},{upsert: true} );

    const todo = await collection.findOne({_id: new ObjectId(_id)});

    res.json(todo)
})
todosRouter.delete('/delete-todo/:_id', async(req: Request, res: Response)=>{
    console.log(req.params);
    const {_id} = req.params;
    // const {title} = req.query;
    console.log(_id);

    const {body} = req.body;

    const updateFields = {
        body: body
    }

    const db = await client.db("toDoDB");
    const collection = await db.collection("todos");
    
    const todo = await collection.deleteOne({_id: new ObjectId(_id)} );

    // const todo = await collection.findOne({_id: new ObjectId(_id)});

    res.json({
        "confirmation":`Give todo deleted ${_id}`,
        todo})
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