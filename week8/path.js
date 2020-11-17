// 8. Create a new file named path.js
//done

// 9. Require in the path module, this is a built in module so no need to install anything.
const path = require("path");
const fs = require("fs");
const { Console } = require("console");
// 10. Create a variable named myPath. Its value should be set to you current directory/some_folder/hello.txt. This should be an absolute path, i.e. for windows should start with C:// or for Mac I think it should start with Users/ HINT: You can get your current directory with \_\_dirname, you'll want to use path.join() to join all of these.
const myPath = path.join(__dirname, "new_folder", "hello.txt");

// 11. Create another variable named pathObject set its value equal to path.parse(myPath). Console.log() pathObject and check out some of the properties you now have available to you.
const pathObject = path.parse(myPath);
console.log(pathObject);
