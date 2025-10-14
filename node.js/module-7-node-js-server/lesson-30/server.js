const http = require("http");

function handlePost(req, res) {
  let body = "";

  req.on("data", chunk => {
    body += chunk.toString()
  })

  req.on("end", () => {
    let data = {};

    try {
      data = JSON.parse(body);
    } catch(err) {
      console.error("ERROR:\n", err);
    }

    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify({
      message: "TEXT 123432",
      number: 1234,
      boolean: true,
      received: data
    }));
  });
}

const server = http.createServer((req, res) => {
  const {url, method} = req;

  

  if(url === "/post" && method === "POST") {

  }


  res.end();
});

server.listen(3000, () => {
  console.log("server started");
})