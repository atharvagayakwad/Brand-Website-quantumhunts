let menu = document.getElementById("menu");
let rect1 = document.querySelector(".rect_1");
let rect2 = document.querySelector(".rect_2");

const demo = () => {
  if (menu.style.height == "100vh") {
    menu.style.height = "10px";
    rect1.style.transform = "rotate(0deg)";
    rect2.style.transform = "rotate(0deg)";
  } else {
    menu.style.height = "100vh";
    rect1.style.transform = "rotate(45deg) translate(4px,4px)";
    rect2.style.transform = "rotate(-45deg)";
  }
};
