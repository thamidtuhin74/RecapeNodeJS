"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
const todos = fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get('/', (req, res) => {
    console.log(req.query);
    const { title } = req.query;
    res.json({
        "sms": "From Express Router",
        todos
    });
    console.log(title);
});
exports.todosRouter.get('/:title', (req, res) => {
    console.log(req.params);
    // const {title} = req.query;
    res.json(req.params);
});
exports.todosRouter.post('/create-todo', (req, res) => {
    console.log(req.body);
    const { title, body, createdAt } = req.body;
    res.json({ title, body, createdAt });
});
