//! Looks great! Nice use of ternary operators however they don't really work in this instance. We want them to be a sequential if/else if block, ternary operators are like individual if statements. I added an example below. Check out the img in this folder to see the error. Ternary operators need to have an else value or it assumes w/e on the other side of the colon (even on the next line) the code to be placed in the "else" part of the ternary operator. In you instance you have another ternary operator, which basically means you nested all those inside of each other, kind of like the russian dolls. You can remedy this by just returning null, undefined, -0, or NaN if you have nothing you want to return. I have an example of his below as well.

//? Removed commented out code.

for (var i = 0; i < 101; i++){
    // (i % 15 == 0) ? console.log(i + " : fizzbuzz"): 
    // (i % 3 == 0) ? console.log(i + ": fizz"):
    // (i % 5 == 0) ? console.log(i + ": buzz"):
    // console.log(i);
    //? (i % 3 === 0) ? console.log(i + ': fizz') : null;

    if(i === 0) {
        continue; //? Were checking for zero and continuing on to the next iteration to remove the logs of 0.
    } else if(i % 15 === 0) {
        console.log(i + ': fizzbuzz');
    } else if(i % 5 === 0) {
        console.log(i + ': buzz');
    } else if(i % 3 === 0) {
        console.log(i + ': fizz');
    } else {
        console.log(i);
    }
}
