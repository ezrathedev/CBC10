// 1) create a string varaible with the name str1 set the value to hello
var str1 = 'hello';
// 2) append " world" onto str1. optional write to console/document
str1 += ' world';
console.log(str1);
// 3) Create a new string str2 its value should be the concatenation of str1 and an "!" i.e var str2 = "hello world!"
var str2 = str1 + '!';

// 4) write the length of the string to the document/console
console.log(str2.length);
// 5) Using a string method make str1 all capital letters. Write it to the console/document. HINT: the toUpperCase method returns the new string capitalized, it does NOT modify the original string so we'll need to store to assign to the str1 variable or make a new one "str1AllCaps" if we want to keep the original string. Additionally the other method would be to just console.log || document.write() the method return value 
console.log(str1.toUpperCase());
// 6) Using square brakcet notation get the "e" out of str1. You can additionally write it to the console/document HINT: str1 should be either "hello world" OR "HELLO WORLD" depending on what you did in the last step. 
console.log(str1[1]);
// 7) Using a string method return the index (number) of "!" in str2.
console.log(str2.indexOf('!'));
// 8) Using the slice method retrieve "hell" out of str2, store the result in a new variable named str3
var str3 = str2.slice(0, 4);
console.log(str3);
// 9) Using the includes method write to the console/document checking if str2 includes 'ell' HINT: should print true to the console or document
console.log(str3.includes('ell')); // return true.
// 10) Create an object with the name of me, it should have two properties name & age. The values should be your name as a string and your age as a number. EXAMPLE: name: 'harcourt', age: 26
const obj = {name: 'Ezra Hampton', age: '28'};
// 11) Write the name property of the me object to the console/document using dot notation

// 12) Write the name property of the me object to the console/document using square bracket notation 

// 13) Append a canDrink property to your me object with true or false as the value 

// 14) append a method onto our me object named greet, the value should be an anonymous function that should write `Hello my name is ${this.name}!`

// 15) call your greet method
greet()
// 16) write an if statemnt that checks if me.name includes an "e". If true should write to the console/document "Your name contains an e". If false should write to the console/document "Your name does NOT contain an E" EXAMPLE: my name is harcourt therefore should print "Your name does NOT contain an E" to the console or document. You'll want to use the include string method 

// 17) Write an if statement checks if me has a canDrink property. If true write a nested if statement that checks that the value of canDrink property is true. If true should write to the console/document `${me.name} can drink`. If false (nested) should write to the console document "${me.name} cannot drink" BONUS: Create a method that does the same thing that belongs to the me object and use "this" instead of "me" HINT: hasOwnProperty example of if statement structure below
// if(condition) {
//     if(condition) {
//         // code
//     } else {
//         //  code
//     }
// }