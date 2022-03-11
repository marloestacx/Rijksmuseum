import { globalData } from "./api.js";
import { showData } from "./data.js";
import { errorSearch } from "./states.js";
import "../routie/routie.min.js";
let input = document.getElementById("searchInput");

export function searchInput() {
  search(input.value);
}

export function search(input) {
  const display = document.getElementById("items");
  display.innerHTML = "";

  //search on input
  let search = globalData.filter(function (d) {
    return (
      d.title.toLowerCase().includes(input.toLowerCase()) ||
      d.principalOrFirstMaker.toLowerCase().includes(input.toLowerCase())
    );
  });

  //if search is empty show error
  if (search.length == 0) {
    errorSearch();
  }

  showData(search);
}

export function searchBar(event) {
  event.preventDefault();

  //get input
  routie("search/" + input.value);
  searchInput();
}
