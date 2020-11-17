// 12. Create a new file named file.js. Require both the file system module and the path module.
const path = require("path"); // importing path
const fs = require("fs"); // importing file systems

// 13. In this file we're going to create a new directory using node.js. To do this you'll want to use the mkdir method available to the fs module. I want you to create a folder named "myNewFolder" in your the root of your project. TIP: look at image below to view the desired folder structure. You'll want to execute file.js with node to execute the instructions and actually create the folder. For the error callback you can just console.log() the error IF there is one.

// 14. Notice that if you execute file.js with node again an error occurs. To fix this lets wrap our mkdir() method with fs.access() to check if the folder already exists. HINT: fs.constants.F_OK checks to see if the file is accessible/exists. In your error callback you can simply do the same as above and console.log an error IF there is one, the else block of the if statement should contain the fs.mkdir() command from above. i.e. if is accessible do nothing console.log() the error, if it is unaccessible (doesn't exist) create the directory.
fs.access(path.join(__dirname, "myNewFolder"), fs.constants.F_OK, (err) => {
  if (err) {
    if (err.errno === -4058) {
      fs.mkdir(path.join(__dirname, "myNewFolder"), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("yay!");
        }
      });
      // fs.mkdir(path.join(__dirname, 'myNewFolder'), () => {

      // });
    }
  }
});

//! Step 13 & 14 -- Good job with using access and mkdir here! However, you would want to have your console.log('yay!') in an else that is connected to your original fs.access,
//! that way the yay! would only show up IF the folder was accessible. How you have it here, the fs.mkdir and 'yay!' only fires if there is an errorno -4058. So when you run it, you get nothing in the console
//! It would also be better to just check for any error (err) instead of a specific error number. So the logic would flow like this.
//! 1. fs.access checks to see if folder is accessible
//! 2. If folder is not accessible if (err), then try to make the folder using fs.mkdir
//! 3. Put an if/else after your fs.mkdir to check if any errors occurred on trying to make the directory.
//! 4. If the folder was accessible(had no errors) have an else to consolelog('folder already created')
//! The correct answer is below.

/* Step 13/14

fs.access(path.join(__dirname, "myNewFolder"), fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(path.join(__dirname, "myNewFolder"), {}, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("folder already created");
  }
});

*/

// 15. Create a new file inside of your "myNewFolder" directory the files name should be 'hello.txt' and its contents should be "hello world" (or whatever you like I don't really care) HINT: you can use fs.writeFile() or fs.appendFile()
fs.appendFile(
  path.join(__dirname, "myNewFolder", "hello.txt"),
  "Hello Wotld!",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("yay");
    }
  }
);

//! Using fs.writeFile() here would keep you from adding a new Hello World! every time you execute. But great job with your append file syntax!

// 16. Finally I want you to read from the hello.txt file you just created and write its contents out to the console. HINT: fs.readFile()
fs.readFile(
  path.join(__dirname, "myNewFolder", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);

//! Great job on step 16!
