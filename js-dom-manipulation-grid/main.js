const successButton = document.querySelector(".js-add-button");
const warningButton = document.querySelector(".js-remove-button");
const transformButton = document.createElement("button");
transformButton.textContent = 'In Liste umwandeln!';
transformButton.classList.add("js-transform-button", "c-button");
const grid = document.querySelector(".js-grid");
const input = document.querySelector(".js-input");
const message = document.querySelector(".js-message");
const colorSelect = document.querySelector(".js-color-select");

//Hinzufügen Button
//Bei Klick auf den Button "Noch ein Grid Item" soll ein weiteres Grid Item mit einem Default Text in das bestehende Grid eingefügt werden
successButton.addEventListener("click", () => {
  const gridItem = document.createElement("div");
  const pTag = document.createElement("p");
  const inputText = input.value.trim();
  const selectedColor = colorSelect.value;

  gridItem.classList.add("js-grid-item", "o-grid__item");

  // Farbauswahl
  if (selectedColor !== "Farbe wählen") {
    gridItem.classList.add(selectedColor);
  }

  pTag.textContent = inputText !== "" ? inputText : "lorem";
  gridItem.appendChild(pTag);

  grid.appendChild(gridItem);

  message.textContent = "";

});

// Entfernen Button
//Bei Klick auf den Button "Ein Grid Item weniger" soll das letzte Grid Item entfernt werden
warningButton.addEventListener("click", () => {
  const lastItem = document.querySelector('.js-grid-item:last-child')

  if (lastItem) {
    lastItem.remove();
    message.textContent = "";
  } else {
    message.textContent = "Keine Elemente mehr vorhanden";
  }
});

//// Button nach dem "Weniger"-Button einfügen
warningButton.parentNode.insertBefore(transformButton, warningButton.nextSibling)

//Umwandeln Button
transformButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll('.js-grid-item')
  const list = document.createElement('ul');

  gridItems.forEach(item => {
    const listItem = document.createElement('li');

    listItem.textContent = item.querySelector("p").textContent;
    if (item.classList.contains("red")) listItem.style.color = "red";
    if (item.classList.contains("blue")) listItem.style.color = "blue";
    if (item.classList.contains("green")) listItem.style.color = "green";

    list.appendChild(listItem);
  });

  //Grid durch Liste ersetzen
  grid.replaceWith(list)
})
