const backgroundColorEl = document.querySelector(".color");
const changeColorEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

function addColor(){
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  backgroundColorEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

changeColorEl.addEventListener("click", addColor);