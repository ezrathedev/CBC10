for (var i = 0; i <= 100; i++){
    console.log(i); // this loops from zero to 100 i set the conditional to lessthan or equal to.
}
// if statements var's are global..

if(i % 3){
    console.log('string');
}else if(i % 5 == 0){
    console.log('buzz');
}else if(i % 5 == 5 && i % 3 == 15){
    console.log('fizzbuzz');
} else{
    console.log('error');
}