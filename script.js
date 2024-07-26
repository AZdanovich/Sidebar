const sidebar = document.getElementById("sidebar");
const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const main = document.getElementById("main");

burgerBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  main.style.marginLeft = "250px";
  burgerBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  main.style.marginLeft = "0";
  burgerBtn.style.display = "block";
});
