const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("Hello World");
    res.end();
  } else if (req.url === '/api/course') {
    res.write(JSON.stringify([1, 2, 3, 4, 5, 6]));
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
