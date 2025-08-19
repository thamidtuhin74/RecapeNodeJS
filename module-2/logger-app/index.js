const { error } = require('console');
const fs = require('fs');

// console.log(process);
console.log(process.argv);

const inputArg = process.argv.slice(2);
// console.log(inputArg);

const inputText = inputArg.join(' ');
// console.log(inputText);
if(!inputText){
    console.log('❌ Please Insert a Input in CMD');
    console.log('Example👉:  node index.js Tahmid Tuhin');
    process.exit(1);
}
else{
    const writeInputText = fs.createWriteStream('./log.txt', {encoding: 'utf-8'});
    writeInputText.write(inputText, (err)=>{
        if(err){
            throw Error("❌ Error: ", err);
        }
    });
    writeInputText.end();
    writeInputText.on("finish", ()=>{
        console.log("INput text wriiten in the log file");
    })





    // fs.writeFile('./log.txt', inputText,{encoding: 'utf-8'}, (err)=>{
    //     if(err){
    //         console.log("Error: ", err);
    //     }
    // })
}