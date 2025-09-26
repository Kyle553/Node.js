const fs = require("fs");

fs.writeFile("./greetings.txt", "Привіт, файл!", "utf-8", (err) => {
  if (err) {
    console.log("ERROR:\n", err);
  }
})