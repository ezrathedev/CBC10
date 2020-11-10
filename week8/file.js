// 12. Create a new file named file.js. Require both the file system module and the path module.
const path = require('path'); // importing path 
const fs = require('fs'); // importing file systems 
// 13. In this file we're going to create a new directory using node.js. To do this you'll want to use the mkdir method available to the fs module. I want you to create a folder named "myNewFolder" in your the root of your project. TIP: look at image below to view the desired folder structure. You'll want to execute file.js with node to execute the instructions and actually create the folder. For the error callback you can just console.log() the error IF there is one.
fs.mkdir(path.join(__dirname, 'myNewFolder'), (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('yay!');
    }
})
// 14. Notice that if you execute file.js with node again an error occurs. To fix this lets wrap our mkdir() method with fs.access() to check if the folder already exists. HINT: fs.constants.F_OK checks to see if the file is accessible/exists. In your error callback you can simply do the same as above and console.log an error IF there is one, the else block of the if statement should contain the fs.mkdir() command from above. i.e. if is accessible do nothing console.log() the error, if it is unaccessible (doesn't exist) create the directory.
fs.access(path.join(__dirname, 'myNewFolder'), fs.constants.F_OK, (err) => {
    if ( err.errno === -4058){
        fs.access(path.join(__dirname, 'myNewFolder'))
    } else if (err) {
        console.log(err);
    }else {
        fs.mkdir(path.join(__dirname, 'myNewFolder'), () => {
        }));
    }
})
// 15. Create a new file inside of your "myNewFolder" directory the files name should be 'hello.txt' and its contents should be "hello world" (or whatever you like I don't really care) HINT: you can use fs.writeFile() or fs.appendFile()

// 16. Finally I want you to read from the hello.txt file you just created and write its contents out to the console. HINT: fs.readFile()
// fs.readFile()