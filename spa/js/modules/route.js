import { getData } from "./api.js";
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
      getData()
        .then(() => {
          setTimeout(startTimer, 3000);
          console.log("test");

          function startTimer() {
            console.log("test2");
            search(input);
          }

          //   filterData(input);
        })

        .catch(function (err) {
          // Catch error
          console.log(err);
        });
    },
  });
}
