"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../config/mongodb");
const mongodb_2 = require("mongodb");
// const filePath = path.join(__dirname, "../../../db/todo.json")
// const todos = fs.readFileSync(filePath, {encoding: 'utf-8'});
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const { id } = req.query;
    console.log(id);
    // const db = await client.db("toDoDB");
    //     const collection = await db.collection("todos").insertOne({
    //     "title": "Learn Node.js",
    //     "body": "Buiild ToDo App Backend",
    //     "createdAt": "2025-08-20T08:05:17.143Z"
    //   })
    //     console.log(collection, "collections");
    const db = yield mongodb_1.client.db("toDoDB");
    const collection = yield db.collection("todos");
    if (id) {
        const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
        res.json(todo);
    }
    else {
        const cousor = collection.find({});
        const todos = yield cousor.toArray();
        res.json({
            "sms": "From Express Router",
            todos
        });
    }
    // console.log(title)
}));
exports.todosRouter.get('/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const { _id } = req.params;
    // const {title} = req.query;
    console.log(_id);
    const db = yield mongodb_1.client.db("toDoDB");
    const collection = yield db.collection("todos");
    const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(_id) });
    res.json(todo);
}));
exports.todosRouter.put('/update-todo/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const { _id } = req.params;
    // const {title} = req.query;
    console.log(_id);
    const { body } = req.body;
    const updateFields = {
        body: body
    };
    const db = yield mongodb_1.client.db("toDoDB");
    const collection = yield db.collection("todos");
    yield collection.updateOne({ _id: new mongodb_2.ObjectId(_id) }, { $set: updateFields }, { upsert: true });
    const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(_id) });
    res.json(todo);
}));
exports.todosRouter.delete('/delete-todo/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const { _id } = req.params;
    // const {title} = req.query;
    console.log(_id);
    const { body } = req.body;
    const updateFields = {
        body: body
    };
    const db = yield mongodb_1.client.db("toDoDB");
    const collection = yield db.collection("todos");
    const todo = yield collection.deleteOne({ _id: new mongodb_2.ObjectId(_id) });
    // const todo = await collection.findOne({_id: new ObjectId(_id)});
    res.json({
        "confirmation": `Give todo deleted ${_id}`,
        todo
    });
}));
exports.todosRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title, body, createdAt } = req.body;
    const db = yield mongodb_1.client.db("toDoDB");
    const collection = yield db.collection("todos");
    collection.insertOne({
        title: title,
        body: body,
        createdAt: createdAt
    });
    const cousor = collection.find({});
    const todos = yield cousor.toArray();
    res.json(todos);
}));
