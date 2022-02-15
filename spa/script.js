const display = document.getElementById("items");
display.textContent = "Laden....";

function getData() {
  fetch("https://www.rijksmuseum.nl/api/nl/collection?key=c5r1klvi")
    // JSON data
    .then((response) => response.json())
    .then((response) => {
      display.textContent = "";
      showData(response.artObjects);
    })
    .catch(function (err) {
      // Catch error
      console.log(err);
    });
}

getData();

function showData(data) {
  data.forEach((item) => {
    console.log(item);

    newItems = document.createElement("article");
    newItems.innerHTML =
      "<h2>" +
      item.title +
      "</h2><h3>" +
      item.principalOrFirstMaker +
      "</h3><img src=" +
      item.webImage.url +
      ">";

    display.appendChild(newItems);
  });
  // console.log(data);
}
