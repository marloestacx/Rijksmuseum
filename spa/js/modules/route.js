import { getData } from "./api.js";
import { filterData } from "./filter.js";
import "../routie/routie.min.js";

export function route() {
  routie({
    "": () => {
      getData();
    },
    "search/:searchInput": (inputField) => {
      getData()
        .then(() => {
          console.log(inputField);
          filterData(inputField);
        })
        .catch(function (err) {
          // Catch error
          console.log(err);
        });
    },
  });
}
