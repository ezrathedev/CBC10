try {
  foo(); // this didn't fire i caught an error
} catch (err) {
  console.error(err.message);
} finally {
  console.log("i will always fire last!");
}
// line 6

const fizz = () => {
  throw new console.error("my error message :p");
};
const buzz = () => {
  throw new error.message();
};

buzz();
