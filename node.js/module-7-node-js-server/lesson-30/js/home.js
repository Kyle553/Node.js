const buttonGet = document.getElementById("GET");
const list = document.getElementById("list");
let itemsList = [];

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

  console.log(data);
  return data
}

buttonGet.addEventListener("click", async (e) => {
  itemsList = await get();
  list.textContent = JSON.stringify(itemsList, null, 1);
})