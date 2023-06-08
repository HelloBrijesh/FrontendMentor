const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const featureMenu = document.getElementById("feature-menu");
const featureArrow = document.getElementById("feature-arrow");
const featureSubMenu = document.getElementById("feature-submenu");
const companyMenu = document.getElementById("company-menu");
const companyArrow = document.getElementById("company-arrow");
const companySubMenu = document.getElementById("company-submenu");

bars.addEventListener("click", () => {
  bars.classList.toggle("change");
  if (menu.style.width !== "250px") {
    menu.style.width = "250px";
  } else {
    menu.style.width = "0px";
  }
});

featureMenu.addEventListener("click", () => {
  if (featureArrow.src.includes("arrow-down")) {
    featureArrow.src = "./images/icon-arrow-up.svg";
    featureSubMenu.style.display = "block";
  } else {
    featureArrow.src = "./images/icon-arrow-down.svg";
    featureSubMenu.style.display = "none";
  }
});
companyMenu.addEventListener("click", () => {
  if (companyArrow.src.includes("arrow-down")) {
    companyArrow.src = "./images/icon-arrow-up.svg";
    companySubMenu.style.display = "block";
  } else {
    companyArrow.src = "./images/icon-arrow-down.svg";
    companySubMenu.style.display = "none";
  }
});
