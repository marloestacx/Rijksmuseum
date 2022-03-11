const display = document.getElementById("items");

//error state loading
export function loading() {
  display.innerHTML = "<img src='./images/loading.gif'/>";
}

//error state search
export function errorSearch() {
  display.textContent = "Niks gevonden, zoek opnieuw";
}
