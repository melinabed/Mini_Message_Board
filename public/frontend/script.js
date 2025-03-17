const body = document.querySelector("body");

const themeButton = document.querySelector("#theme-btn");
const themeIcon = document.querySelector(".icon");
const messageItems = document.querySelectorAll("li");
const messangers = document.querySelectorAll(".message-container h3");

// Function to apply the theme
const applyTheme = (theme) => {
  if (theme === "dark") {
    themeIcon.src = "/icons/sun.svg";
    body.style.backgroundColor = "#24292e";
    messageItems.forEach((item) => {
      item.classList.add("dark-mode-message-item");
      item.classList.remove("light-mode-message-item");
    });
    messangers.forEach((messanger) => {
      messanger.style.color = "#33d651";
    });
  } else {
    themeIcon.src = "/icons/moon.svg";
    body.style.backgroundColor = "#f6f8fa";
    messageItems.forEach((item) => {
      item.classList.remove("dark-mode-message-item");
      item.classList.add("light-mode-message-item");
    });
    messangers.forEach((messanger) => {
      messanger.style.color = "green";
    });
  }
};

// Load the saved theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeButton.addEventListener("click", () => {
  console.log("button clicked");
  const currentTheme = themeIcon.src.includes("moon.svg") ? "light" : "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
