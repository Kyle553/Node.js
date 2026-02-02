const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if(url === "/" && method === "GET") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(path.join(__dirname, "pages", "home.html")).pipe(res);
  } else if (url === "/1.png" && method === "GET") {
    res.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream(path.join(__dirname, "1.png")).pipe(res);
  } else if (url === "/contact" && method === "GET") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(path.join(__dirname, "pages", "contact.html")).pipe(res);
  } else if (url === "/about" && method === "GET") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(path.join(__dirname, "pages", "about.html")).pipe(res);
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    fs.createReadStream(path.join(__dirname, "pages", "404.html")).pipe(res);
  }
});

server.listen(3000, () => {
  console.log("Server start")
})