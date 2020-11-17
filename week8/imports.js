// 1. By now you should know the drill create a new repo named week8
//done
// 2. Using "npm init" generate your package.json file. You don't need to add any special configurations, the default settings are fine. TIP: You can do accept all the defaults w/ "npm init -y"
// done
// 3. Create two files import.js and export.js. TIP: You can create them in your text-editor(vs-code) or you can use the CLI to create them, i.e. "touch import.js export.js" (make sure you are in the appropriate directory)
//done
// 4. In export.js define two functions add & subtract. Each function should take two numbers and return the appropriate solution. i.e. add(2, 2) should return or console.log() 4. sub(4, 2) should return or console.log() 2.
// done
// 5. Using module.exports, export both functions. HINT: if you're exporting multiple things its best to wrap them in an object. e.g. module.exports = { foo, bar } (in which foo and bar are two functions)
//done
// 6. In your import.js file import export.js. HINT: If you're requiring a custom module it must begin with "./" e.g. const file = require('./file.js');
const file = require("./exports.js");
// 7. Call both the add and the sub function in import.js to ensure each of them are working.
console.log(fun[0]);
console.log(fun[1]);

//! Good job with your import. However, you would have needed to import the functions in an object, as I showed you in your exports.js file.
//! This way you could call the functions by name and pass in any two numbers you would like, as follows:

/*

console.log(add(4, 2));
console.log(subtract(6,2));

*/
