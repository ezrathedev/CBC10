const fs = require("fs");
const os = require("os");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Hello what is your name?\n");
rl.on("line", (userinput, err) => {
  if (userinput === "exit") {
    console.log("goodbye");
    rl.close();
  } else if (err) {
    console.log(err);
  } else {
    console.log(`noice to meet you ${userinput}`);
  }
});

//! Awesome stuff! The only, slight super small issue, is that you should have created a new event for the 'close' to fire. You console logged goodbye when the rl.close fires
//! inside the line event, which works just fine here, however the assignment wanted you to create a new event for close just to show you how to code the listener.
//! This will cover any issues, such as if the close() event happened for some other reason you are not aware of. It is quite simple and I will post it below for your reference.
//! You got full credit here btw, just want to make sure you are aware you can do it this way.

/*

rl.on('close', () => {
    console.log('goodbye!');
})

*/
