btn_info = document.getElementById("btn_info");
front = document.getElementById("front");
back = document.getElementById("back");

//change class on click
btn_info.onclick = function () {
  if (!back.classList.contains("hidden")) {
    back.classList.add("hidden");
  } else {
    back.classList.remove("hidden");
  }
  front.classList.toggle("hidden");
};
