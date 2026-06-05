// Arbeiten mit dem DOM2 (ShoppingList Light)

// Eingabefeld:
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Gebe einen Artikel ein';
document.body.appendChild(input);

// Button:
const button = document.createElement('button');
button.textContent = 'Hinzufügen';
document.body.appendChild(button);

// Liste:
const list = document.createElement('ul');
document.body.appendChild(list);

// Klick-Event: Artikel wird der Liste hinzugefügt
button.addEventListener('click', () => {
    const item = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});
