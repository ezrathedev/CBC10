const fs = require('fs');
const os = require('os');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
console.log('Hello what is your name?\n');
rl.on('line', (userinput, err) => {
    if (userinput === 'exit'){
        console.log('goodbye');
        rl.close()

    } else if (err) {
        console.log(err);
    } else{
        console.log(`noice to meet you ${userinput}`);
    }
})
