// const { error } = require('console');
const path = require('path')
const fs = require('fs');

const filePath = path.join(__dirname,"log.txt");
// console.log(filePath);

// console.log(process);
console.log(process.argv);

const inputArg = process.argv.slice(2);
// console.log(inputArg);

const inputText = inputArg.join(' ');
const timeStamp = new Date().toISOString();

const message = `${inputText}, ${timeStamp}\n`
// console.log(inputText);
if(!inputText){
    console.log('❌ Please Insert a Input in CMD');
    console.log('Example👉:  node index.js Tahmid Tuhin');
    process.exit(1);
}
else{

    // Using Buffer👇👇
    // const writeInputText = fs.createWriteStream(filePath, {encoding: 'utf-8', flags: 'a'});
    // writeInputText.write(message, (err)=>{
    //     if(err){
    //         throw Error("❌ Error: ", err);
    //     }
    // });
    // writeInputText.end();
    // writeInputText.on("finish", ()=>{
    //     console.log("Input text wriiten in the log file");
    // })




    // Using Async File System👇👇
    // fs.writeFile('./log.txt', message ,{encoding: 'utf-8', flag: 'a'}, (err)=>{
    //     if(err){
    //         console.log("Error: ", err);
    //     }
    //     else{
    //         console.log("Input text wriiten in the log file");
    //     }
    // })
    fs.appendFile('./log.txt', message ,{encoding: 'utf-8', flag: 'a'}, (err)=>{
        if(err){
            console.log("Error: ", err);
        }
        else{
            console.log("Input text wriiten in the log file");
        }
    })
}