const http = require("http");
const url = require("url");

function handlePost(req, res) {
  let body = "";

  req.on("data", chunk => {
    body += chunk.toString();
  })

  req.on("end", () => {
    let data = {};

    try {
      data = JSON.parse(body);
    } catch(err) {
      console.error("ERROR:\n", err);
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
      message: "TEXT 123432",
      number: 1234,
      boolean: true,
      received: data
    }));
  });
}

function handleGet(req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({
    id: 1,
    info: "profile",
    content: "sdfsdfsdf"
  }));
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if(req.url === "/post" && req.method === "POST") {
    handlePost(req, res);
  } else if (parsedUrl.pathname === "/search" && req.method === "GET") {
    handleGet(req, res);
  }
});

server.listen(3000, () => {
  console.log("server started");
})