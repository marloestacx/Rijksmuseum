export function showData(data) {
  const display = document.getElementById("items");

  data.forEach((item) => {
    let newItems = document.createElement("article");
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
}
