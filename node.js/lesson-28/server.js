const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write("START \n");
  res.end("END");
})

server.listen(3000, () => {
  console.log("Server started")
})

// node server.js