import { showData } from "./data.js";
export { globalData };
let globalData;

export async function getData() {
  const rijksmuseum = "https://www.rijksmuseum.nl/api/nl/collection";
  const apiKey = "c5r1klvi";
  const artAmount = "&ps=100";
  const url = `${rijksmuseum}?key=${apiKey}${artAmount}`;

  fetch(url)
    // JSON data
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
    })
    .then((response) => {
      document.getElementById("items").textContent = "";
      globalData = response.artObjects;
      showData(globalData);
    })
    .catch(function (err) {
      // Catch error
      console.log(err);
    });
}
