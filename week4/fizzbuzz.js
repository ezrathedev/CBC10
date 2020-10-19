var i;
for (var i = 0; i < 101; i++) {
  console.log(i); // this loops from zero to 100 i set the conditional to lessthan or equal to.

  // if statements var's are global..
if (i % 3 == 0) {
    console.log(i + " :fuzz");
    {
    }
    if (i % 5 == 0) {
    console.log(i + " : buzz");
    {
        if (i % 5 == 0 && i % 3 == 0) {
        console.log(i + " : fizzbuzz");
                }
            {
        }
    }
}
}
}
