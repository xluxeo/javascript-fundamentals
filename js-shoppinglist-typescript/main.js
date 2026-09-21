"use strict";
const button = document.querySelector('.c-button');
const input = document.querySelector('.c-input');
const list = document.querySelector('#list');
const select = document.querySelector('.c-select');
var Category;
(function (Category) {
    Category["Baumarkt"] = "Baumarkt";
    Category["Elektronik"] = "Elektronik";
    Category["Mode"] = "Mode";
    Category["Lebensmittel"] = "Lebensmittel";
})(Category || (Category = {}));
function getCategory(value) {
    switch (value) {
        case Category.Baumarkt:
            return Category.Baumarkt;
        case Category.Elektronik:
            return Category.Elektronik;
        case Category.Mode:
            return Category.Mode;
        case Category.Lebensmittel:
            return Category.Lebensmittel;
        default:
            return undefined;
    }
}
button.addEventListener('click', () => {
    const itemText = input.value.trim();
    if (itemText === '') {
        alert('Bitte geben Sie einen Artikel ein!');
        return;
    }
    const newItem = {
        name: itemText,
        category: getCategory(select.value)
    };
    const listItem = document.createElement('li');
    const displayCategory = newItem.category ? newItem.category : 'Keine Kategorie';
    listItem.textContent = `${newItem.name} (${displayCategory})`;
    list.appendChild(listItem);
    // Felder wieder leeren
    input.value = '';
    select.value = '';
});
//# sourceMappingURL=main.js.map