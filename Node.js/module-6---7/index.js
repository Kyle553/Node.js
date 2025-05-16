const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("REQUEST:", req.method, req.url);

  if (req.method === "GET" && req.url === "/") {
    res.write(JSON.stringify({"message": "TEXT TEXT TEXT TEXT4"}));
    res.end();
  }
});


server.listen(3000, "localhost", () => {
  console.log("Сервер 'слухає'.")
});

server.on("error", (err) => {
  console.error("ERROR:", err);
});


http.get("http://localhost:3000", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("ВІДПОВІДЬ:", data);
  });

}).on("error", (err) => {
    console.error("ERROR:", err)
  });