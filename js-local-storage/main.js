const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');

// Erstelle einen Button mit einen Klick-Event-Listener
// Auf das Klick-Event soll der Farbwert in den local Storage geschrieben werden
button.addEventListener('click', () => {
  localStorage.setItem('color', input.value);
})

