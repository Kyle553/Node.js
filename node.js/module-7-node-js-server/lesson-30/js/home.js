const fs = require("fs");
const path = require("path");
const buttonGet = document.getElementById("GET");
const list = document.getElementById("list");

let itemsList = getDataFromFile();

// Це повинен робити сервер
// function getDataFromFile() {
//   let data = null;
//   try {
//     data = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");
//   } catch (err) {
//     console.log("ERROR:\n", err);
//   }
  
//   return data;
// }

async function get() {
  let data = {};
  try {
    const response = await fetch("http://localhost:3000/api/get", {method: "GET"});

    if (!response.ok) {
      throw new Error(`CODE ${response.status}`);
    }

    data = await response.json();
  } catch (err) {
    console.error("CATCH ERROR:\n", err);
  }

  // Ми повинні забрати від сервера список з айді і неймами і передати в умовний itemsList

  
  // itemsList.push(JSON.stringify(data, null, 1));

  // list.textContent = itemsList

  console.log(data);
}

buttonGet.addEventListener("click", (e) => {
  get();
})