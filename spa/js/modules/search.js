import { globalData } from "./api.js";
import { showData } from "./data.js";
import { errorSearch } from "./states.js";
import "../routie/routie.min.js";

export function searchInput() {
  let input = document.getElementById("searchInput");

  search(input.value);

  console.log(input);
}

export function search(input) {
  const display = document.getElementById("items");
  display.innerHTML = "";

  //search on input
  console.log(input);

  let search = globalData.filter(function (d) {
    return (
      d.title.toLowerCase().includes(input.toLowerCase()) ||
      d.principalOrFirstMaker.toLowerCase().includes(input.toLowerCase())
    );
  });

  if (search.length == 0) {
    errorSearch();
  }

  showData(search);
}

export function searchBar(event) {
  event.preventDefault();

  let input = document.getElementById("searchInput");

  console.log(input);
  routie("search/" + input.value);
  searchInput();
}
