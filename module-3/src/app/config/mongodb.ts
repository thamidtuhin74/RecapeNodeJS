import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://toDoAdmin:noS2TzL4l2NFHZx1@cluster0.vqsktco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});