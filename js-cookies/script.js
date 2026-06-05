const saveButton = document.querySelector('.js-save-button');
const saveButtonTwoDays = document.querySelector('.js-save-button-two-days');
const listButton = document.querySelector('.js-list-button');

const inputKey = document.querySelector('input[name="key"]');
const inputValue = document.querySelector('input[name="value"]');
const inputExpires = document.querySelector('input[name="expires"]');

// Auf Klick des Buttons sollen die Angaben aus den Eingabefeldern in ein Cookie geschrieben werden (Laufzeit = Session)
saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  const key = inputKey.value;
  const value = inputValue.value;
  const dateValue = inputExpires.value;

  let cookieString = `${key}=${value}; path=/;`;

  // Lege mit Hilfe des Formulars ein Cookie an, welches zwei Tage später (vom aktuellen Tag ausgehend) abläuft
  if (dateValue) {
    const expires = new Date(dateValue);
    cookieString += ` expires=${expires.toUTCString()};`;
  }

  document.cookie = cookieString;
  alert('Cookie gespeichert');

})

saveButtonTwoDays.addEventListener('click', (event) => {
  event.preventDefault();
  const key = inputKey.value;
  const value = inputValue.value;
  const expires = new Date();
  expires.setDate(expires.getDate() + 2);

  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/;`;
  alert('Cookie für 2 Tage gespeichert!');
})

// Erstelle auf der Seite einen weiteren Button und einen Container, der mittels eines Klick-Listeners die Informationen aus den Cookies auslesen und jedes Cookie einzeln auflisten
listButton.addEventListener('click', (event) => {
  event.preventDefault();
  const container= document.querySelector('.c-cookies');
  const cookies = document.cookie.split('; ');

  container.innerHTML = '';

  if (!document.cookie.trim()) {
    container.innerHTML = '<p>Keine Cookies vorhanden.</p>';
    return;
  }

  cookies.forEach(cookie => {
    const cookieContent = document.createElement('p')
    cookieContent.textContent = cookie;
    container.appendChild(cookieContent);
  })
})
