import { showData } from "./data.js";
// import { api } from "./data.js";
const display = document.getElementById("items");

// document.getElementById("myInput").addEventListener("keyup", search);

export function search(data) {
  //Empty results
  display.innerHTML = "";

  var input = document.getElementById("myInput");

  //search on input
  var search = data.filter(function (d) {
    return (
      d.title.toLowerCase().includes(input.value.toLowerCase()) ||
      d.principalOrFirstMaker.toLowerCase().includes(input.value.toLowerCase())
    );
  });

  if (search.length == 0) {
    display.textContent = "Niks gevonden, zoek opnieuw";
  }

  showData(search);
}
