const fs = require("fs");
const fileName = "test1.txt";
const fileText = "test test test";
let fileData = "";
const textToAdd = "AAAAAAAAAAAAA";

function checkOrCreateFileSync() {
  try {
    fs.accessSync(fileName, fs.constants.F_OK);
  } catch (err) {
    console.error(`The file ${fileName} does not exist:\n`, `ERROR CODE: ${err.code}`);
    console.log(`Creating the file ${fileName}`);
    try {
      fs.writeFileSync(`./${fileName}`, "");
    } catch (err) {
      console.error(`Error while creating file ${fileName}`, err);
      process.exit(1);
    }
    console.log(`The file ${fileName} created`);
  }
  console.log(`File ${fileName} exists`);
}

checkOrCreateFileSync();

function writeFileSync() {
  try {
    fs.writeFileSync(`./${fileName}`, `${fileText}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("File overwritten: \n", fileText);
}

writeFileSync();

function readFileSync() {
  try {
    fileData = fs.readFileSync(`./${fileName}`, "utf8");
  } catch (err) {
    console.error("Error reading file: \n", err);
    process.exit(1);
  }
  console.log("File successfully read \n", fileData);
}

readFileSync();

function appendFileSync() {
  try {
    fs.appendFileSync(`./${fileName}`, "\n" + textToAdd, "utf-8");
  } catch (err) {
    console.error("Error when adding text to a file \n", err);
    process.exit(1);
  }
  console.log("Text successfully added to file: \n", textToAdd);
}

appendFileSync();

readFileSync();