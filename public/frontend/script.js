const body = document.querySelector("body");

const themeButton = document.querySelector("#theme-btn");
const themeIcon = document.querySelector(".icon");

themeButton.addEventListener("click", () => {
  if (themeIcon.src.includes("/icons/moon.svg")) {
    themeIcon.src = "/icons/sun.svg";
    body.style.backgroundColor = "black";
  } else {
    themeIcon.src = "/icons/moon.svg";
    body.style.backgroundColor = "#f6f8fa";
  }
});
