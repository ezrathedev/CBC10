const http = require("http");
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
  res.end("<h1>Hello World</h1>");
});
server.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});

//! Again, great work here Ezra!
