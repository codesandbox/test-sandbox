const http = require("http");

const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World 1");
});

server1.listen(3004, () => {
  console.log(`Server running`);
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World 2");
});

server2.listen(3005, () => {
  console.log(`Server running`);
});
