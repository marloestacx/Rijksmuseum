import { search } from "./modules/search.js";
import { route } from "./modules/route.js";

document.getElementById("myInput").addEventListener("keyup", search);

route();
