const inputDataEl = document.querySelector('input');

const addInputText = (event) => {
    (event.currentTarget.value.length === Number(inputDataEl.dataset.length)) ?
        inputDataEl.setAttribute('class', 'valid') :
        inputDataEl.setAttribute('class', 'invalid');
};

inputDataEl.addEventListener("blur", addInputText);