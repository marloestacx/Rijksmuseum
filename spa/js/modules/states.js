const display = document.getElementById("items");

export function loading() {
  display.innerHTML = "<img src='../images/loading.gif'/>";
}

export function errorSearch() {
  display.textContent = "Niks gevonden, zoek opnieuw";
}
