const btnUp0 = document.querySelector(".btn-lvl0");
const btndown2 = document.querySelector(".btn-lvl2");
const btnLvl1Up = document.querySelector(".btn-lvl1-up");
const btnLvl1Down = document.querySelector(".btn-lvl1-down");
const lift = document.querySelector(".lift");

btnUp0.addEventListener("click", () => {
  lift.style.bottom = "68%";
  lift.style.transition = "10s";
  lift.classList.add = "up-clicked";
});

btndown2.addEventListener("click", () => {
  lift.style.bottom = ".6rem";
  lift.style.transition = "10s";
  lift.classList.remove = "up-clicked";
  lift.classList.add = "down-clicked";
});

if ((lift.classList.contains = "up-clicked")) {
  btnLvl1Up.addEventListener("click", () => {
    lift.style.bottom = "34%";
    lift.style.transition = "5s";
  });
} else if ((lift.classList.contains = "down-clicked")) {
  btnLvl1Up.addEventListener("click", () => {
    return;
  });
  btnLvl1Down.addEventListener("click", () => {
    lift.style.bottom = "34%";
    lift.style.transition = "5s";
  });
}
