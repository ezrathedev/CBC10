// for (var i = 0; i < 100; i++) {
//   console.log(i); // this loops from zero to 100 i set the conditional to less than or equal to.

//   // if statements var's are global..
// if (i % 3 == 0) {
//     console.log(i + " : fizz");
//     {
//     }
//     if (i % 5 == 0) {
//     console.log(i + " : buzz");
//     {
//         if ( i % 15 == 0) {
//         console.log(i + " : fizzbuzz");
//                 }
//             {
//         }
//     }
// }
// }
// }

for (var i=0; i < 101; i++){
    (i % 15 == 0) ? console.log(i + " : fizzbuzz"):
    (i % 3 == 0) ? console.log(i + ": fizz"):
    (i % 5 == 0) ? console.log(i + ": buzz"):
    console.log(i);
}
