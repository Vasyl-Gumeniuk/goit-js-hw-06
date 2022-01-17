const inputDataEl = document.querySelector('input');
const textSpanEl = document.querySelector('span');

const changeFontSize = (event) => {
    textSpanEl.style.fontSize = `${event.currentTarget.value}px`
};
inputDataEl.addEventListener("input", changeFontSize);