const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListEl = document.querySelector("#ingredients");

const ingredientListItemEl = (elements) => {
  return elements.map(element => {
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("item");
    listItemEl.textContent = element;
    return listItemEl;
  });
};
const ingredientItemsEl = ingredientListItemEl(ingredients);
ingredientListEl.append(...ingredientItemsEl);