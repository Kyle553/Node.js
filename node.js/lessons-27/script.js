const fs = require("fs");
const fileName = "test1.txt";
const fileText = "test test test";
let fileData = "";
const textToAdd = "AAAAAAAAAAAAA";


fs.access(fileName, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`The file ${fileName} does not exist:\n`, `ERROR CODE: ${err.code}`);

    console.log(`Creating the file ${fileName}`)
    fs.writeFile(`./${fileName}`, "", (err) => {
      if (err) {
        console.error(`Error while creating file ${fileName}`, err);
        process.exit(1);
      }

      console.log(`The file ${fileName} created`);
    })  
  }

  console.log(`File ${fileName} exists`);

  fs.writeFile(`./${fileName}`, `${fileText}`, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("File overwritten: \n", fileText);
  })
})

fs.readFile(`./${fileName}`, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file: \n", err);
    process.exit(1);
  }

  fileData = data;
  console.log("File successfully read \n", fileData);
})

fs.appendFile(`./${fileName}`, textToAdd, "utf-8", (err) => {
  if (err) {
    console.error("Error when adding text to a file \n", err);
    process.exit(1);
  }

  console.log("Text successfully added to file: \n", textToAdd);
})