const nameInputEl = document.querySelector("input#name-input");
const nameOutputEl = document.querySelector("span#name-output");

const addInputText = () => {
    if (nameInputEl.value !== "") {
        return nameOutputEl.textContent = nameInputEl.value;
    };
        return nameOutputEl.textContent = "Anonymous";
};

nameInputEl.addEventListener("input", addInputText);