//1. Syncronous


const fs = require("fs");

// const data = fs.readFileSync('./textfile.txt','utf8');
const data = fs.readFileSync('./textfile.txt',{encoding: "utf8"});

const newText = "New Text using writeFileSync()";

fs.writeFileSync('./textfile.txt', newText, {flag: 'a'});

const updateddata = fs.readFileSync('./textfile.txt',{encoding: "utf8"});
console.log(updateddata);

//2. Asyncronous
console.log("-----------------Asnc OUTPUT----------------")


const asncData = "Adding Data unsing AsynReacd Function;"
fs.writeFile('./textfile.txt', asncData , {flag: 'a'},  (err, asncData)=>{
    if(err){
        console.log("Error of File System"+err );
        return;
    }
    console.log("Texxt File Updated: ");
})

fs.readFile('./textfile.txt',{encoding: 'utf-8'}, (err,data)=>{
    if(err){
        console.log("Error of File System"+err );
        return;
    }
    console.log("Data from Async FS readFile(): "+ data); 
});