//1. Syncronous


const fs = require("fs");

// const data = fs.readFileSync('./textfile.txt','utf8');
const data = fs.readFileSync('./textfile.txt',{encoding: "utf8"});

const newText = "New Text using writeFileSync()";

fs.writeFileSync('./textfile.txt', newText, {flag: 'a'});

const updateddata = fs.readFileSync('./textfile.txt',{encoding: "utf8"});
console.log(data);
console.log(updateddata);

//2. Asyncronous