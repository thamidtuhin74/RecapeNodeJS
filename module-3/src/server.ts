import app from "./app/app";
import { client } from "./app/config/mongodb";

let server;
const port =  5000;


const bootstrap = async() =>{
    await client.connect();
    console.log("successfully connected to MongoDB!");
//     const db = await client.db("toDoDB");
//     const collection = await db.collection("todos").insertOne({
//     "title": "Learn Node.js",
//     "body": "Buiild ToDo App Backend",
//     "createdAt": "2025-08-20T08:05:17.143Z"
//   })
//     console.log(collection, "collections");

    server = app.listen(port,async ()=>{
        console.log(`App in runing in port : ${port}`);
        
    })
}

bootstrap();