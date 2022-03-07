import { showData } from "./data.js";
const display = document.getElementById("items");
display.textContent = "Laden....";
let data = [];
let globalData;
export { globalData };

export async function getData() {
  fetch("https://www.rijksmuseum.nl/api/nl/collection?key=c5r1klvi&ps=100")
    // JSON data
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
    })
    .then((response) => {
      document.getElementById("items").textContent = "";
      data = response.artObjects;
      console.log(data);
      showData(response.artObjects);
      // search(data);
      globalData = data;
    })
    .catch(function (err) {
      // Catch error
      console.log(err);
    });
}
