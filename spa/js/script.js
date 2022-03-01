import { getData } from "./modules/api.js";
import "./modules/data.js";
import { search } from "./modules/search.js";

const display = document.getElementById("items");

getData();
document.getElementById("myInput").addEventListener("keyup", search);
