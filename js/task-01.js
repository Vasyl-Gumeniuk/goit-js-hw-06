const countItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${countItemsEl.length}`);

countItemsEl.forEach(listItemEl => {
    const itemCategoryListEl = listItemEl.firstElementChild.textContent;
    console.log(`Category: ${itemCategoryListEl}`);

    const itemElementListEl = listItemEl.lastElementChild;
    const itemSubElementListEl = itemElementListEl.querySelectorAll("li");
    console.log(`Elements: ${itemSubElementListEl.length}`);
});