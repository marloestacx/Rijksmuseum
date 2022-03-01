import { showData } from "./data.js";
import { search } from "./search.js";
const display = document.getElementById("items");
let data = [];

export function getData() {
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
      search(data);
    })
    .catch(function (err) {
      // Catch error
      console.log(err);
    });
}

// export function showData(data) {
//   data.forEach((item) => {
//     let newItems = document.createElement("article");
//     newItems.innerHTML =
//       "<h2>" +
//       item.title +
//       "</h2><h3>" +
//       item.principalOrFirstMaker +
//       "</h3><img src=" +
//       item.webImage.url.slice(0, -3) +
//       "=s1000" +
//       ">";
//     display.appendChild(newItems);
//   });
// }
