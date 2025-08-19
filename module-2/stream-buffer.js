const fs =  require('fs');

const readStream = fs.createReadStream('./streamSrc.txt', {encoding: 'utf-8'});

const writeStream = fs.createWriteStream('./streamOutput.txt', {encoding: 'utf-8'});

// console.log(readStream);

readStream.on("data", (data)=>{
    console.log(data);
    writeStream.write(data, (err)=>{
        if(err){
            throw Error("Error: ", err);
        }
    })
})

readStream.on("error", (err)=>{
    if(err){
        throw Error("Error: ", err);
    }
})

writeStream.on("error", (err)=>{
    if(err){
        throw Error("Error: ", err);
    }
})

readStream.on("end", ()=>{
    console.log("Reading Ended Sucessfully;");
    writeStream.end()
})

writeStream.on("finish", ()=>{
    console.log("Writting Sucessfully Done")
})