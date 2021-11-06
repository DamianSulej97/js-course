function setUpEvents() {
  var content = document.getElementById("content");
  var button = document.getElementById("show-more");

  button.onclick = function () {
    if (content.className == "open") {
      //zmniejszenie boxa
      content.className = "";
      button.innerHTML = "Show More";
      content.setAttribute("style", "overflow: hidden;");
    } else {
      //rozszerzenie boxa
      content.className = "open";
      button.innerHTML = "Show Less";
      content.setAttribute("style", "overflow: scroll;");
    }
  };
}

//uruchomienie funkcji po wczytaniu calej strony
window.onload = function () {
  setUpEvents();
};

content.setAttribute("style", "overflow: scroll;");
