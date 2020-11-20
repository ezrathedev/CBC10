const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); // used to get the form data.

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

//! Step 15 - Your code here is correct, but does not work because you did not import
//! the view files (html files) which were given to you in the assignment. 3/4 credit

app.get("/page", (req, res) => {
  if (req.params.page == 1) {
    res.sendFile(path.join(__dirname, `views/page_1.html`));
  } else if (req.params.page == 2) {
    res.sendFile(path.join(__dirname, `views/page_2.html`));
  } else if (req.params.page == 3) {
    res.sendFile(path.join(__dirname, `views/page_3.html`));
  }
});

//! You are missing the colon on line 20, which comes after the slash in '/page', should be
//! '/:page'. Other then that, your code looks great. However, it does not work because
//! you did not import the require view files (html pages). 3/4 credit

app.post("/", (req, res) => {
  res.end(`<h1>This is ${req.body.username}'s page</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

//! Great code again here, but not working without view files. 3/4 pt
