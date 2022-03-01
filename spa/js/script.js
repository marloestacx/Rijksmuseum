import { getData } from "./modules/api.js";
import "./modules/data.js";
import { search } from "./modules/search.js";

// let data = [];
const display = document.getElementById("items");
display.textContent = "Laden....";

// function getData() {
//   fetch("https://www.rijksmuseum.nl/api/nl/collection?key=c5r1klvi&ps=100")
//     // JSON data
//     .then((response) => {
//       if (response.status >= 200 && response.status <= 299) {
//         return response.json();
//       }
//     })
//     .then((response) => {
//       display.textContent = "";
//       showData(response.artObjects);
//       data = response.artObjects;
//     })
//     .catch(function (err) {
//       // Catch error
//       console.log(err);
//     });
// }

console.log(getData.data);
getData();

// console.log(getData.data);

// function showData(data) {
//   data.forEach((item) => {
//     newItems = document.createElement("article");
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

document.getElementById("myInput").addEventListener("keyup", search);

// function search() {
//   console.log("test");
//   //Empty results
//   display.innerHTML = "";

//   var input = document.getElementById("myInput");
//   console.log(data);
//   //search on input
//   var search = data.filter(function (d) {
//     return (
//       d.title.toLowerCase().includes(input.value.toLowerCase()) ||
//       d.principalOrFirstMaker.toLowerCase().includes(input.value.toLowerCase())
//     );
//   });

//   if (search.length == 0) {
//     display.textContent = "Niks gevonden, zoek opnieuw";
//   }

//   showData(search);
// }
