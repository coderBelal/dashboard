const menuIcon = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const xmark = document.getElementById("xmark");
const bell = document.getElementById("icon-one");
const notification = document.querySelector(".notification");
const cross = document.getElementById("cross");
menuIcon.addEventListener("click", () => {
  menu.style.display = "block";
});

xmark.addEventListener("click", () => {
  menu.style.display = "none";
});
bell.addEventListener("click", () => {
  notification.style.display = "block";
});
cross.addEventListener("click", () => {
  notification.style.display = "none";
});
