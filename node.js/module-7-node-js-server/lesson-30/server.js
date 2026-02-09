const http = require("http");
const path = require("path");
const fs = require("fs");

const folders = {
  js: "js",
  html: "pages",
  css: "styles"
}

const writeHeadContType = {
  js: {"Content-Type": "text/javascript"},
  html: {"Content-Type": "text/html"},
  css: {"Content-Type": "text/css"},
  json: {"Content-Type": "application/json"},
  text: {"Content-Type": "text/plain; charset=utf-8"}
}

function readFile(filePath, res, contType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error read file:\n", err)

      if(err.code === "ENOENT") {
        res.statusCode = 404;
      } else if(err.code === "EACCES") {
        res.statusCode = 403;
      } else {
        res.statusCode = 500;
      }
      
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Error read file");
      return;
    }
    
    res.writeHead(200, contType);
    res.end(data);
  })
}

function readStream(filePath, res, headerName, headerValue) {
  const stream = fs.createReadStream(filePath);
  
  stream.on("error", (err) => {
    console.error("Error read steeam:\n", err);
    
    if(!res.headersSent) {
      if(err.code === "ENOENT") {
        res.statusCode = 404;
      } else if(err.code === "EACCES") {
        res.statusCode = 403;
      } else {
        res.statusCode = 500;
      }
      
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Error read steeam");
      return;
    }
    
    res.destroy(err);
  });
  
  res.setHeader(headerName, headerValue);
  res.statusCode = 200;
  stream.pipe(res);
}

function filePath(...parts) {
  return path.join(__dirname, ...parts);
}

const server = http.createServer((req, res) => {
  const baseUrl = "http://localhost:3000"
  const parsedUrl = new URL(req.url, baseUrl);
  const filePathValue = "";

  if (parsedUrl.pathname === "/" && req.method === "GET") {
    filePathValue = filePath(folders.html ,"home.html");
    readFile(filePathValue, res, writeHeadContType.html);

  } else if (parsedUrl.pathname === "/styles/home.css") {
    filePathValue = filePath(folders.css, "home.css");
    readFile(filePathValue, res, writeHeadContType.css);

  } else if (parsedUrl.pathname === "/js/home.js") {
    filePathValue = filePath(folders.js, "home.js");
    readFile(filePathValue, res, writeHeadContType.js);

  } else if (parsedUrl.pathname === "/api/get" && req.method === "GET") {
    filePathValue = filePath("data.json");
    readStream(filePathValue, res, "Content-Type", "application/json");
  } else {
    res.writeHead(404, writeHeadContType.text);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server started");
}); 