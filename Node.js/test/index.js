const fs = require("node:fs");

async function read() {
  try {
    const data = await fs.promises.readFile("readFile.txt", "utf8");
    console.log(data.toUpperCase());
  } catch (error) {
    console.error(error);
  }
}

read();

fs.readFile("readFile.txt", "utf8", ((error, data) => {
  if (error) {
    console.error("Помилка читання файлу:", error);
    return;
  }
  console.log("DATA-1:", data)
}))

fs.promises.readFile("readFile.txt", "utf8")
  .then((data) => console.log("DATA-2:", data))
  .catch((error) => console.error("Помилка читання файлу:", error));
  

const text = "32432432 3253245234 324 32432 324324 324";  

async function write() {
  try {
    await fs.promises.writeFile("writeFile.txt", text, "utf8");
    console.log("Файл успішно записаний!");
  } catch (error) {
    console.error("Помилка запису файлу:", error);
  }
}

write();