import { showData } from "./data.js";
let data = [];
let globalData;
export { globalData };

export async function getData() {
  const rijksmuseum = "https://www.rijksmuseum.nl/api/nl/collection";
  const apiKey = "c5r1klvi";
  const ammount = "&ps=100";
  const url = `${rijksmuseum}?key=${apiKey}${ammount}`;

  fetch(url)
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
      globalData = data;
    })
    .catch(function (err) {
      // Catch error
      console.log(err);
    });
}
