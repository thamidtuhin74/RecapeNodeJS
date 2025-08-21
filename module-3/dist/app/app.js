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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./todos/todos.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middlleware & a parser ; Converting JSON to Object
app.use("/todos", todos_routes_1.todosRouter);
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
const todos = fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
app.get('/', (req, res, next) => {
    next();
}, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(something);
        res.json("Welcome to TO Do server From next()");
    }
    catch (error) {
        next(error);
    }
}));
app.use((error, req, res, next) => {
    if (error) {
        console.log("Error : ", error);
        res.status(400).json({ message: "Something Wents Wrong form global error handler", error });
    }
});
// app.get('/todos', (req: Request, res: Response)=>{
//     console.log(req.query)
//     const {title} = req.query;
//     res.json(todos)
//     console.log(title)
// })
// app.get('/todos/:title', (req: Request, res: Response)=>{
//     console.log(req.params)
//     // const {title} = req.query;
//     res.json(req.params)
// })
// app.post('/todos/create-todo', (req: Request, res: Response)=>{
//     console.log(req.body)
//     const {title, body, createdAt} = req.body;
//     res.json({title, body, createdAt});
// })
// app - router handleing, middleware
// server - server handleing - StaticRange, stop, 
exports.default = app;
