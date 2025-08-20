import app from "./app/app";


let server;
const port =  5000;

const bootstrap = async() =>{
    server = app.listen(port, ()=>{
        console.log(`App in runing in port : ${port}`)
    })
}

bootstrap();