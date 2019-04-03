const fs = require('fs');
const path = require('path');

// Create folder 
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder created ...')
});

//Create and write to file (Do the same with diffrent content to overwrite , to add 
// Use appendfile as a callback 
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!  ', (err) => {
    if (err) throw err;
    console.log('File created and Written  ...')
    //Append to the existing file 
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Nice to meet you World i am node :)', (err) => {
        if (err) throw err;
        console.log('File created and Written  ...')
    });
});

//Read File 
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
});

//Rename the file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'HelloNODEworld.txt'), (err) => {
    if (err) throw err;
    console.log('File Renamed ...')
});


