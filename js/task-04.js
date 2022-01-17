let counterValue = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const decrementClickEl = () => {
    counterValue -= 1;
    console.log(counterValue);
    const counter = document.querySelector("#value");
    counter.textContent = counterValue;
};
const incrementClickEl = () => {
    counterValue += 1;
    console.log(counterValue);
    const counter = document.querySelector("#value");
    counter.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", decrementClickEl);
incrementBtnEl.addEventListener("click", incrementClickEl);