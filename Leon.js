let btnCheck = document.querySelector("#btn");
let mode = document.querySelector("#btn");

mode.onclick = function () {
  return chMode();
};

function chMode() {
  if (mode.classList == "light") {
    mode.classList = "dark";
    mode.style.cssText = "left:23px;";
  } else {
    mode.classList = "light";
    mode.style.cssText = "left:0;";
  }

  let body = document.querySelector("body");
  mode.classList.contains("light")
    ? body.setAttribute("data-theme", "light")
    : body.setAttribute("data-theme", "dark");
}
