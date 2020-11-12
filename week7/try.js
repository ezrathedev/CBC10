try {
  foo(); // this didn't fire i caught an error
} catch (err) {
  console.error(err.message);
} finally {
  console.log("i will always fire last!");
}

//! Good job on steps 1-5 Ezra!

// line 6

const fizz = () => {
  throw new console.error("my error message :p");
};
const buzz = () => {
  throw new error.message();
};

//! Must call your buzz() function to execute the code.
buzz();

//! You should call your buzz() function here so you can see what is happening in the console. I added the call on line 20 here to see. Currently you have defined the functions, but they are not being called or executed. When you call your buzz() function it gives an error saying error is not defined, because your functions are missing a few things. First of all, on line 14, console.error() is not a constructor, so when you are calling for 'throw new', you should be looking to follow that with a class constructor. In this case, throw new Error("my error message :p") is what you want. For your buzz() function, you are first missing a paramater for your error to pass. You want to pass it in on your catch as (err), which you can then access with the (err.message) property. Also, your buzz() function needs a try block and a catch block to execute this properly, because we are testing that the fizz function throws an error. I will give the correct answer below, which hopefully clears some this up. If you have any questions, just reach out to me any time on slack.

/*

const fizz = () => {
  throw new Error("my error message :p");
};

const buzz = () => {
  try {
    fizz();
  } catch (err) {
    console.log(err.message);
  }
};

*/

//! Your package.json file is missing the ejs and bcrypt modules:
//! npm install ejs
//! npm install bcrypt
