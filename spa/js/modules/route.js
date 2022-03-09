import { getData, globalData } from "./api.js";
import "../routie/routie.min.js";
import { loading } from "./states.js";
import { search } from "./search.js";

export function route() {
  routie({
    "": () => {
      loading();
      getData();
    },
    "search/:searchInput": (input) => {
      loading();
      //if data is not empty search
      if (!globalData) {
        getData()
          .then(() => {
            search(input);
          })
          .catch(function (err) {
            // Catch error
            console.log(err);
          });
      } else {
        search(input);
      }
    },
  });
}
