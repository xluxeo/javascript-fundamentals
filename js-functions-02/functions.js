/*
- Gegeben sind zwei Eingabefelder
- In diese soll jeweils ein Datum eingegeben werden können
- Beim Blur Event soll jeweils das Datum korrigiert werden. Dazu erstelle eine Funktion. Als Parameter wird der Value des "geblurten" Inputs übergeben.
- Die Funktion soll Bindestriche und Slashes in Punkte umwandeln, sodass folgende Eingaben möglich sind, die alle in "11.10.2023" umgewandelt werden
11.10.2023
11-10-2023
11/10/2023
- Zusatz: Die Placeholder sollen im HTML auf "01-10-2023" und "07-10-2023" gesetzt werden. Nach Laden der Seite soll dann die Funktion aufgerufen werden und die Placeholder Werte korrgieren.
*/


function formatDate(date) {
  return date ? date.replaceAll('-', '.').replaceAll('/', '.') : date;
}

window.onload = function() {
  document.querySelectorAll('.js-date').forEach(input => {
    input.placeholder = formatDate(input.placeholder);
    input.addEventListener('blur', () => input.value = formatDate(input.value));
  });
}
