//! Everything looked great, good work. There was a slight problem w/ generating the random number checkout the notes below. Some minor formatting errors. Keep up the good work. Thanks for doing the study groups, I think everyone can benefit from them.

// var num1 = prompt('enter your phone number'); // asking user for phone number.
// console.log(num1);

// var num2 = prompt('enter another number');
// console.log(num2);

// alert(num1 ** num2); //? Below is another way to accomplish the same thing
// alert(Math.pow(num1, num2));

// var math = Math.ceil(Math.random(Math.round(Math.floor) +1)); // output should be 1 //! You never called the .floor() method in this and the prompt was to console.log() a random number between 1 & 3. I added an example below. 
var math = Math.floor(Math.random() * 3) + 1; //? Generates random number between 1 & 3
console.log(math);

var arr = ['a','b','c','d','e','f']; // created an array.
// console.log(arr); 

arr.pop(); // should remove f from array.
// console.log(arr); 

arr.push('g'); // should add g to the end of the array.
// console.log(arr);
arr.shift(); // removing a from the array
// console.log(arr); 

// a number infront of the array

arr.unshift(1); // pushing this to the front of the array.
console.log(arr); // should result in 1 ,a ,b, c ,d ,e, g.

arr.splice(2, 3,['cat','dog','rabbit']);
console.log(arr);

var copied = arr.slice(0, 3);
console.log(copied);    
console.log(copied[2][1]); //? Missing semicolon
//! All this looked great