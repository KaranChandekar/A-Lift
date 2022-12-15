const btnUp0 = document.querySelector(".btn-lvl0");
const btndown2 = document.querySelector(".btn-lvl2");
const btnLvl1Up = document.querySelector(".btn-lvl1-up");
const btnLvl1Down = document.querySelector(".btn-lvl1-down");
const lift = document.querySelector(".lift");
var upmotion = false;
var downmotion = false;
btnUp0.addEventListener("click", () => {
  upmotion = true;
  downmotion = false;
  lift.style.bottom = "68%";
  lift.style.transition = "5s";
});

btnLvl1Up.addEventListener("click", () => {
  if (upmotion == true) {
    lift.style.bottom = "34%";
    lift.style.transition = "2s";
  } else if (downmotion == true) {
  }
});

btndown2.addEventListener("click", () => {
  upmotion = false;
  downmotion = true;
  //btnLvl1Up.removeEventListener("click");
  lift.style.bottom = "1%";
  lift.style.transition = "5s";
});

btnLvl1Down.addEventListener("click", () => {
  if (downmotion == true) {
    lift.style.bottom = "34%";
    lift.style.transition = "2s";
  } else if (upmotion == true) {
    lift.style.bottom = "70%";
    lift.style.transition = "5s";
  }
});

const audio = new Audio("/elevator-door.mp3");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
