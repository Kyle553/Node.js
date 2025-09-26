const fs = require("fs");

let fileContent = "";

function readFile() {
  try {
    fileContent = fs.readFileSync("./txtFile.txt", "utf8");
  } catch (err) {
    console.error(err);
  }
  return fileContent;
}

readFile();

console.log("OLD:\n" ,fileContent);

function appendTextToFile() {
  try {
    fs.appendFileSync("./txtFile.txt", "\n" + "new text content", "utf8");
  } catch (err) {
    console.error(err);
  }
}

appendTextToFile();
readFile();

console.log("NEW:\n" ,fileContent);