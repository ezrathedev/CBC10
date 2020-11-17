function add(x, y) {
  return 2 + 2;
}
function subtract(x, y) {
  return 4 - 2;
}

//! Step 4 -- Your functions should take in two paramaters (x,y) and then return the value based on whether they add or subtract. Here you gave your function a literal 2+2, and 4-2. However we want them to add or subtract with ANY values passed in. Below is the correct way to write these functions:

/*

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

*/

fun = [add(), subtract()];

module.exports = "fun";

//! Adding your functions to an array and then exporting them does work, but its easier to do the following so you can call specific functions by name in other files

/*

module.exports = { add, subtract }

*/
