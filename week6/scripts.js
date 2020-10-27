// define a variable with the let keyword.
let key = 'Hello world'; 
// reassign value to something new
key = 'something new';
//define a constant variable with a number a string and a bool
const bool = true;

if(true){
    var keyword = true;
    console.log(keyword);
}else {
    console.log('do noting!');
}
// console.log(keyword); returns true.
if(true){
    let me = 'Ezra';
    console.log(me);
}else {
    console.log('i also do nothing!');
}
// console.log(me); // causes an error

const arr = [];
arr.push('car')
arr.push('go');
arr.push('fast');
console.log(arr); // output car, go , fast

//define a constant variable with the value being an empty object
const obj = {};
//define a property of name with your name as the value, define a property of age with your age as the value, console.log it if you want to check
obj.name = 'Ezra';
console.log(obj);
// using a template literal write the name you just stored in our constant object to write 'hello I am (your name here)'
console.log(`Hello i am ${obj.name} nice to meet you!`);

/*define a function named greet, that takes in destructured object parameters of name & age. The function should write 
'Hello I am (your name here) and I am (your age here) years old.' You should write this as a template literal. call your function. */
function greet(name, age){
    console.log(`Hello I am ${name} and I am ${age} years old.`)
}
greet('Ezra', 28); // Hello I am Ezra and I am 28 years old.

//Using object destructuring create two variables name & age from your constant object we've been working with. console.log both 
const name = obj.name;
const age = obj.age = 28;
console.log(obj.age, obj.name)
console.log(obj);

//  define an arrow function that accepts no parameters and console logs hello world store it in the variable arrow1, call your function
const arrowfoo1 = () => {
    let arrow1 = 'hello world';
    console.log(arrow1);
}
arrowfoo1(); // hello world

/*define an arrow function that accepts 1 parameter of str 
and console logs that parameter store it in a variable named 
arrow2, call your function pass in any parameter you like */

const arrowfoo2 = (str) => {
    let arrow2 = str;
    console.log(arrow2);
}
arrowfoo2('i am a string that i want to be ');

/*line 19  */
const arrowfoo3 = (num1, num2) => {
    arrow3 = num1 + num2;
    console.log(arrow3);
}
arrowfoo3(5,5); // should return 10;


//! line 20 
// this works but keeps giving me an error.
setTimeout(() => {
    document.querySelector('div').innerHTML = '<h1>Hello world</h1>'; 
}, 3000)

// Using a for of loop console log each element of our constant array we defined above
for (const arrs of arr) {
    console.log(arrs); // car go fast
}

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)};
