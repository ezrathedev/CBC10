// ) declare a variable var1
let var1;

// 2) assign a value to var1 of to the string of 'string'
var1 = 'string';
// 3) declare and assign a new variable named var2 to the "g" from var1 using square bracket notation
let var2 = var1.indexOf('g');
console.log(var2);
// 4) append the string text "o!" onto var2 
var2 += 'o!';
console.log(var2); //! come back to this!!
// 5) create a variable named var3 assign it to any value of type number
let var3 = 0;
// 6) create a variable named var4 assign it to a string type the value should be a number character. Example: var var4 = "5";
let var4 = '3';
// 7) write the result of var3 + var4 to the console or the document. You should see the concatenation of var3 + var4
console.log(var3 + var4);
// 8) Write to the console or document using parseFloat || parseInt (depending on whether you are dealing with decimal or an integer) the sum of var3 and var4. Example: CORRECT: 5 + 5 = 10 INCORRECT: 5 + 5 = 55 basically not concatenation 
console.log(parseInt(var4));
// 9) Create a variable named arr with the value of an empty array
let arr = [];
// 10) write a for loop that adds 1 - 10 onto the array. The resutling array should be arr = [1,2,3...9, 10]; HINT: you'll start at 1 instead of 0 inside the code block of the for loop we want to use the push method, you can use anything you like the that creates the desired end result;
for(var i =1; i <= 10; i++){
    // arr[i] = i;
    arr[i] = i;
}
console.log(arr);
// 11) Add 11 on to the end of our array with an array method. result should look like this arr = [1,2,3,...9,10,11] HINT: push
arr.push(11);
console.log(arr);
// 12) Remove the last element of the array. result should look like arr = [1,2,3...9,10]
arr.pop() // this should remove 11 from the end of the array.
console.log(arr);
// 13) Add 0 onto the front of our array. result should look like arr = [0,1,2,3...9,10]
arr.unshift(0); // this should add 0 to the front of the array
console.log(arr);
// 14) remove the 0 on the front of our array. result should look like arr = [1,2,3...9,10]. HINT: shift()
arr.shift(); // should remove the zero from the begining of the array
console.log(arr);
// 15) use splice to remove the first element of our array. resutls should be arr = [2,3..9,10] HINT: takes three parameters the first is starting index, the second is how many elements, all the following parameters are things to add in after the elements specified to be removed are removed, if any are. 
arr.splice(0,1); // removed an empty slot ?? should remove 1
console.log(arr);
// 16) use splice to remove the last two elements of the array. results should be arr = [2,3..7,8] HINT: the index of the next to last element would be ()arr.length - 2)
arr.splice(arr.length -1, 10 ,8 )
console.log(arr);// this should be right.
// 17) use splice to add -1, 0, 1 onto the front of our array. results should be arr = [-1,0,1,2,3...7,8];
arr.splice(); // double check this one .
// 18) use slice to make a new array called copy, it should have the first 3 elements in copy. results should look like arr = [-1,0,1,2,3...7,8] (unchanged) and copy = [-1,0,1]
let copy = arr.slice(0, 4);
console.log(copy);