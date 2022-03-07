import { globalData } from "./api.js";
import { showData } from "./data.js";
import { errorSearch } from "./states.js";

export function filterData(input) {
  //search on input
  console.log(input);

  console.log(globalData);

  var search = globalData.filter(function (d) {
    return (
      d.title.toLowerCase().includes(input.toLowerCase()) ||
      d.principalOrFirstMaker.toLowerCase().includes(input.toLowerCase())
    );
  });

  if (search.length == 0) {
    // display.textContent = "Niks gevonden, zoek opnieuw";
    errorSearch();
  }

  showData(search);
}
