/**
 * ! Feedback:
 * Made some formatting changes. Added some minor feedback on some different approaches. Overall not a lot to add a pretty easy homework, you did great!
 * Keep up the good work.
 */

console.warn('this is a warning!'); //this should output: this is a warning!

console.error('Error! System critical!'); // this should output: Error! system critical!

var var1 = 'i am a string!';
console.log(var1); //should output: i am a string.

console.log('\n'); // this is me creating a new line.
// console.log(' '); //! another way to add in a blank line

var var2 = 2;

var add = var1 + var2;
console.log(add); // output should be: i am a string!2. //! Correct, good job!

/* 
    data types
    ints //! Just a number in js
    floats //! Just a number in js
    doubles //! Just a number in js
    bools
    strings
    null //! Null is not a type
    NaN //! NaN is not a type
    Objects //? Object is a type in JS
    undefined
*/

console.log(typeof var1); //string //! Correct, good job!

var var3 = 'text';
console.log(var3); // output: text.

var3 = true;
console.log(var3);

var1 = 5;

var2 = '5';

var2 = parseInt(var2);
console.log(var2 + var1);
/**
 * ! Just another way to accomplish this, either or is fine.
 * If you want to combine line 43 & 44 into one you could do it like this
 * console.log(var1 + parseInt(var2));
 */
