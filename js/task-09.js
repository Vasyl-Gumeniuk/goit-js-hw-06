const btnEl = document.querySelector("button");
const spanContentEl = document.querySelector("span");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBgrColor(event) {
  const getRandomColorValue = getRandomHexColor();
  document.body.style.backgroundColor = getRandomColorValue;
  spanContentEl.textContent = getRandomColorValue;
}

btnEl.addEventListener("click", changeBodyBgrColor);