//! Did some basic formatting
// define a variable with the let keyword.
let key = 'Hello world';
// reassign value to something new
key = 'something new';
//define a constant variable with a number a string and a bool
const bool = true;

if (true) {
	var keyword = true;
	// console.log(keyword); //? I see how my instructions could be mis-interpreted, I wanted you to console.log() keyword outside of the if stmt to show how var can pollute the global space from block scope.
}
// } else {
// 	console.log('do noting!');
// }
console.log(keyword); // returns true. //? This is what I was looking for.
if (true) {
	let me = 'Ezra';
	console.log(me);
}
// } else {
// 	console.log('i also do nothing!');
// }
// console.log(me); // causes an error //? Correct b/c let cannot escape the scope it is defined in.

const arr = [];
arr.push('car');
arr.push('go');
arr.push('fast');
console.log(arr); // output car, go , fast

//define a constant variable with the value being an empty object
const obj = {};
//define a property of name with your name as the value, define a property of age with your age as the value, console.log it if you want to check
obj.name = 'Ezra';
obj.age = 28; //? Adding your age onto the variable for the remaining examples
// console.log(obj); //? Just commenting out for feedback
// using a template literal write the name you just stored in our constant object to write 'hello I am (your name here)'
console.log(`Hello i am ${obj.name} nice to meet you!`);

/*define a function named greet, that takes in destructed object parameters of name & age. The function should write 
'Hello I am (your name here) and I am (your age here) years old.' You should write this as a template literal. call your function. */
//! We can specify parameters in curly brackets to denote that they are properties from an incoming object I want to alias as local variables with the same name as the property (key). Check out the example below, notice I can just pass an object and the properties are automatically pulled from it
// function greet(name, age) {
// 	console.log(`Hello I am ${name} and I am ${age} years old.`);
// }
// greet('Ezra', 28); // Hello I am Ezra and I am 28 years old.
function greet({ name, age }) {
	console.log(`Hello I am ${name} and I am ${age} years old.`);
}

greet(obj);

//Using object destructuring create two variables name & age from your constant object we've been working with. console.log both
//! Though the same effect is accomplished what I was looking for was is shown below.
// const name = obj.name;
// const age = (obj.age = 28);
// console.log(obj.age, obj.name);
// console.log(obj);
const { name, age } = obj; //? Pulls the name & age properties out of the obj object and stores them each in their own variable with the same name as the property
console.log(name, age);

//  define an arrow function that accepts no parameters and console logs hello world store it in the variable arrow1, call your function
const arrowfoo1 = () => {
	let arrow1 = 'hello world';
	// console.log(arrow1); //? Commenting this out for feedback
};
arrowfoo1(); // hello world

/*define an arrow function that accepts 1 parameter of str 
and console logs that parameter store it in a variable named 
arrow2, call your function pass in any parameter you like */

const arrowfoo2 = (str) => {
	// let arrow2 = str;
	// console.log(arrow2);
	console.log(str); //? One liner
};
arrowfoo2('i am a string that i want to be ');

/*line 19  */
//! I wanted you to return the sum value, we can do that w/ either the 'return' keyword or we can also accomplish this by omitting the curly brackets, check out the example below
// const arrowfoo3 = (num1, num2) => {
// 	arrow3 = num1 + num2;
// 	console.log(arrow3);
// };
// arrowfoo3(5, 5); // should return 10;
// const arrow3 = (num1, num2) => num1 + num2;
// console.log(arrow3(5, 5)); //? Console.loging the return value from our arrow3 function

//? BONUS SAMPLE
const arrow3 = (num1, num2) => {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		return 'Error! Must supply a valid number';
	} else {
		return num1 + num2;
	}
};

console.log(arrow3(true, 5)); //? Returns error string
console.log(arrow3(5, 5)); //? Returns 10

//! line 20
// this works but keeps giving me an error. //! This might be giving you an error b/c you didn't have the defer tag. i.e. the DOM wasn't finished loading when the JS ran. Probably works here b/c its got a setTimeout of 3 secs and the DOM will definitely be finished loading by that point.
setTimeout(() => {
	// document.querySelector('div').innerHTML = '<h1>Hello world</h1>'; //? Temporary comment out so it doesn't overwrite bonus code
}, 3000);

// Using a for of loop console log each element of our constant array we defined above
for (const ele of arr) {
	//? Changed arrs to ele, or element if you'd rather
	console.log(ele); // car go fast
}

//? For...of loops should only be for arrays, if we want to iterate over an object we can use the for...in loop
// for (const [key, value] of Object.entries(obj)) {
// 	console.log(`${key}: ${value}`);
// }
for (const key in obj) {
	console.log(`${key}: ${obj[key]}`); //? Same result as before
}

//! BONUS SAMPLE SOLUTION:
const div = document.querySelector('div');

const harcourt = {
	name: 'Harcourt',
	age: 26,
	birthday: new Date('2/11/2001'),
	hobbies: ['cars', 'computers', 'travel', 'diy projects']
};

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

//TODO: Needs some work only prints correct years between (1910 - 2899)
function bio({ name, age, birthday, hobbies }) {
	let bio = `Hello my name is ${name}, I am ${age} years old. `;
	bio += `I was born in ${months[birthday.getMonth()]} of ${
		birthday.getYear() >= 100
			? '2' + birthday.getYear() - 100
			: '19' + birthday.getYear()
	}. `;
	bio += `My hobbies include: `;
	for (const hobby of hobbies) {
		if (hobbies.indexOf(hobby) === hobbies.length - 1) {
			bio += `and ${hobby}.`;
		} else {
			bio += `${hobby}, `;
		}
	}
	div.innerHTML = bio;
}

bio(harcourt);
