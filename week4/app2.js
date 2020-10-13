var num1 = prompt('enter your phone number'); // asking user for phone number.
// console.log(num1);

var num2 = prompt('enter another number');
// console.log(num2);

alert(num1 ** num2); 

var math = Math.ceil(Math.random(Math.round(Math.floor) +1)); // output should be 1
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

arr.unshift(1) ; // pushing this to the front of the array.
console.log(arr); // should result in 1 ,a ,b, c ,d ,e, g.

arr.splice(2, 3,['cat','dog','rabbit']);
console.log(arr);

var copied = arr[0,1,2];
console.log(copied);