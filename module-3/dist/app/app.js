"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middlleware & a parser ; Converting JSON to Object
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
const todos = fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
app.get('/', (req, res) => {
    res.send("Welcome to ToDo Server");
});
app.get('/todos', (req, res) => {
    console.log(req.query);
    const { title } = req.query;
    res.json(todos);
    console.log(title);
});
app.get('/todos/:title', (req, res) => {
    console.log(req.params);
    // const {title} = req.query;
    res.json(req.params);
});
app.post('/todos/create-todo', (req, res) => {
    console.log(req.body);
    const { title, body, createdAt } = req.body;
    res.json({ title, body, createdAt });
});
// app - router handleing, middleware
// server - server handleing - StaticRange, stop, 
exports.default = app;
