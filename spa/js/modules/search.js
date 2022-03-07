import { showData } from "./data.js";
import { globalData } from "./api.js";
import { filterData } from "./filter.js";
import "../routie/routie.min.js";
const display = document.getElementById("items");

export function search() {
  //Empty results
  display.innerHTML = "";

  var input = document.getElementById("myInput");

  //   //search on input
  //   var search = globalData.filter(function (d) {
  //     return (
  //       d.title.toLowerCase().includes(input.value.toLowerCase()) ||
  //       d.principalOrFirstMaker.toLowerCase().includes(input.value.toLowerCase())
  //     );
  //   });

  //   if (search.length == 0) {
  //     display.textContent = "Niks gevonden, zoek opnieuw";
  //   }

  filterData(input.value);

  // console.log(input.value);

  routie("search/" + input.value);

  // showData(search);
}
