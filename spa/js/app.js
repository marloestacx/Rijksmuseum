import { route } from "./modules/route.js";
import { searchBar } from "./modules/search.js";

route();

document.querySelector("form").addEventListener("submit", searchBar);
