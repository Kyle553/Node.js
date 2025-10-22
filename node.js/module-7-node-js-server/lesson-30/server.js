const http = require("http");
const path = require("path");
const fs = require("fs");

const folders = {
  js: "js",
  html: "pages",
  css: "styles"
}
const contentType = {
  js: {"Content-Type": "text/javascript"},
  html: {"Content-Type": "text/html"},
  css: {"Content-Type": "text/css"}
}
let filePathValue = "";

function readFile(filePath, res, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("ERROR:\n", err);

      res.writeHead(500, {"Content-Type": "text/plain"});
      res.end("Server error");
      return;
    }

    res.writeHead(200, contentType);
    res.end(data);
  })
}

function filePath(folder, fileName) {
  return path.join(__dirname, folder, fileName);
}

const server = http.createServer((req, res) => {
  const baseUrl = "http://localhost:3000"
  const parsedUrl = new URL(req.url, baseUrl);

  if (parsedUrl.pathname === "/" && req.method === "GET") {
    filePathValue = filePath(folders.html ,"home.html");
    readFile(filePathValue, res, contentType.html);

  } else if (parsedUrl.pathname === "/styles/home.css") {
    filePathValue = filePath(folders.css, "home.css");
    readFile(filePathValue, res, contentType.css);

  } else if (parsedUrl.pathname === "/js/home.js") {
    filePathValue = filePath(folders.js, "home.js");
    readFile(filePathValue, res, contentType.js);

  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server started")
}); 