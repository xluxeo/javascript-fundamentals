// Dynamic Import
// Klick auf einen Button soll eine Funktion importieren
// Die Funktion soll die Backgroundfarbe des Bodys auf hotpink setzt und einen Parameter erwarten, welcher ein Element erwartet und die Backgroundfarbe dessen auf weiß setzt mit der Schriftfarbe hotpink
// Das zu übergebene Element soll der Button selbst sein
export function styleELement (element) {
  document.body.style.backgroundColor = 'hotpink';
  element.style.color = 'hotpink'
  element.style.backgroundColor = 'white';
}
