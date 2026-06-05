// Erstelle einen Event-Listener, der auf Klick auf dem "Generate"-Button ein Event auslöst.
const generateButton = document.querySelector('button');
generateButton.addEventListener('click', () => {
// Ermittle den in das Input-Feld eingegebenen Namen und weise ihn in einer Variablen zu
  const nameInput = document.querySelector('input[type = "text"]');
  const name = nameInput ? nameInput.value.trim() : '';
// Füge alle Werte aneinander und gebe diese dann als Satz in der Blockquote aus Tipp: HTMLElement.innerText = 'xyz';
  const salutation = getSalutation();
  const hobbies = getHobbys();
  const blockquote = document.querySelector('blockquote');

  // Fehlermeldung
  const errors = [];
  if (!name)      errors.push('ein Name');
  if (!salutation) errors.push('ein Geschlecht');
  if (!hobbies)   errors.push('mindestens ein Hobby');

  if (errors.length > 0) {
    blockquote.innerText = `Bitte angeben: ${errors.join(', ')}.`;
    return;
  }

  blockquote.innerText = `${salutation} ${name} mag gerne ${hobbies}.`;
});


// Ermittle das ausgewählte Geschlecht in einer eigenen Funktion (z.B. getSalutation). Wenn der Wert "m" ist, gib "Herr" zurück. Wenn der Wert "w" ist, gib "Frau" zurück und speichere den zurückgegebenen Wert in eine Variable.
// Tipp: der gewählte Wert kann mittels CSS Selektor ":checked" gefunden werden
function getSalutation() {
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  if (!selectedGender) return '';
  return selectedGender.value === 'w' ? 'Frau' : 'Herr';
}

//  Ermittle die ausgewählten Hobbys in einer eigenen Funktion (z.B. getHobbys). Die gewählten Hobbys sollen mittels ", " getrennt werden.
// Tipp: :checked / querySelectorAll / Loop
function getHobbys() {
  const selectedHobbys = document.querySelectorAll('input[type="checkbox"]:checked');
  return Array.from(selectedHobbys).map(hobby => hobby.value).join(', ');
}

//  Der "Zurücksetzen"-Button soll nun nicht mehr das Formular zurücksetzen, sondern die Blockquote leeren. Tipp: event.preventDefault();
const resetButton = document.querySelector('input[type="reset"]');
resetButton.addEventListener('click', (event) => {
  event.preventDefault();
  const blockquote = document.querySelector('blockquote');
  blockquote.innerText = "";
});
