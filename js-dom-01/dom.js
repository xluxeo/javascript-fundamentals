document.body.style.margin = '0';

// Textelement erstellen
const myTextElement = document.createElement('p');
myTextElement.textContent = 'Lorem ipsum';
myTextElement.style.marginTop = '3000px'
document.body.appendChild(myTextElement);

// Button erstellen
const myButtonElement = document.createElement('button');
myButtonElement.textContent = 'Click me';
myButtonElement.style.position = 'fixed';
myButtonElement.style.top = '10px';
myButtonElement.style.left = '10px';
document.body.appendChild(myButtonElement);

// Klick-Event: Farbe setzen, scrollen & Liste erzeugen
myButtonElement.addEventListener('click', () => {
  // Farbe vor dem scrollen auf orange setzen
    myTextElement.style.color = 'orange';
    // Scrollen zum Textelement
    myTextElement.scrollIntoView({ behavior: 'smooth' });
    // Liste erzeugen, falls noch nicht vorhanden
  if (!document.querySelector('#myList')) {
    createListAfterText();
  }
});


// Liste erzeugen
function createListAfterText() {
  const items = ['Hund', 'Katze', 'Maus'];

  // ordered list
  const myListElement = document.createElement('ol');
  myListElement.id = 'myList';
  myListElement.classList.add('my-list');

  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;

    listItem.addEventListener('click', () => {
      const nextItem = myListElement.children[index + 1];
      if (nextItem) {
        nextItem.textContent = 'gefressen';
      }

      myListElement.style.background = 'lightgray';
    });
    myListElement.appendChild(listItem);
  });
  myTextElement.after(myListElement);
  createTopLink(myListElement);
}


function createTopLink(listElement) {

  const topLink = document.createElement('a');
  topLink.textContent = 'Top';
  topLink.href = '#';
  topLink.style.display = 'block';
  topLink.style.fontSize = '2rem';

  listElement.after(topLink);


  topLink.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Alles außer dem Button entfernen
    Array.from(document.body.children).forEach(child => {
      if (child !== myButtonElement) {
        child.remove();
      }
    });
  });
}
