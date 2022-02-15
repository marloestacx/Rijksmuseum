const data = [];

const display = document.getElementById("items");
display.textContent = "Laden....";

function getData() {
  fetch("https://www.rijksmuseum.nl/api/nl/collection?key=c5r1klvi&ps=100")
    // JSON data
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
    })
    .then((response) => {
      display.textContent = "";
      showData(response.artObjects);

      data.push(response.artObjects);
    })
    .catch(function (err) {
      // Catch error
      console.log(err);
    });
}

getData();

function showData(data) {
  data.forEach((item) => {
    newItems = document.createElement("article");
    newItems.innerHTML =
      "<h2>" +
      item.title +
      "</h2><h3>" +
      item.principalOrFirstMaker +
      "</h3><img src=" +
      item.webImage.url.slice(0, -3) +
      "=s1000" +
      ">";

    display.appendChild(newItems);
  });
  // console.log(data);
}

function search(data) {
  var input = document.getElementById("myInput");
  console.log(input.value);
  console.log(data);
  data.title.filter(input);
}
