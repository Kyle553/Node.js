const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/" && req.method === "GET") {
    const filePath = path.join(__dirname, "pages", "home.html")
    // const stream = fs.createReadStream(filePath);
    
    // stream.on("error", (err) => {
    //   console.error("ERROR:\n", err);

    //   res.writeHead(500, {"Content-Type": "text/plain"});
    //   res.end("Server error");
    // })

    // res.writeHead(200, {"Content-Type": "text/html"});
    // stream.pipe(res);
  }
});

server.listen(3000, () => {
  console.log("Server started")
});