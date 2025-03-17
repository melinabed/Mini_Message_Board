const body = document.querySelector("body");

const themeButton = document.querySelector("#theme-btn");
const themeIcon = document.querySelector(".icon");
const messageItems = document.querySelectorAll("li");

themeButton.addEventListener("click", () => {
  if (themeIcon.src.includes("/icons/moon.svg")) {
    themeIcon.src = "/icons/sun.svg";
    body.style.backgroundColor = "#24292e";
    messageItems.forEach((item) => {
      item.classList.add("dark-mode-message-item");
      item.classList.remove("light-mode-message-item");
    });
  } else {
    themeIcon.src = "/icons/moon.svg";
    body.style.backgroundColor = "#f6f8fa";
    messageItems.forEach((item) => {
      item.classList.remove("dark-mode-message-item");
      item.classList.add("light-mode-message-item");
    });
  }
});
