import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app/app";


let server;
const port =  5000;


const uri = "mongodb+srv://toDoAdmin:noS2TzL4l2NFHZx1@cluster0.vqsktco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



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