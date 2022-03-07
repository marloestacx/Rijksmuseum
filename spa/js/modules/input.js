import { search } from "./search.js";

export function searchInput() {
  let input = document.getElementById("searchInput");

  search(input.value);

  console.log(input);

  // routie("search/" + input.value);
}
