// Named Import/Export (mindestens 3 verschiedene)
import { add, subtract, multiply } from './mathUtilities.js'
console.log('Ergebnis add:', add(1, 2))
console.log('Ergebnis subtract:', subtract(1, 2))
console.log('Ergebnis multiply:', multiply(1, 2))


// Named Import mit Umbenennung
import { add as plus, subtract as minus, multiply as multiplyBy } from './mathUtilities.js'
console.log('Ergebnis plus:', plus(2, 2))
console.log('Ergebnis minus:', minus(3, 2))
console.log('Ergebnis multiplyBy:', multiplyBy(4, 2))

// Default Import/Export
import plusBy from './mathUtilities.js'
console.log('Ergebnis plusBy:', plusBy(5, 2))

// Namespace Import
import * as math from './mathUtilities.js'
console.log('Ergebnis math:', math.add(6, 2))
console.log('Ergebnis math:', math.addBy(7, 2))

// Dynamic Import
// Klick auf einen Button soll eine Funktion importieren
// Die Funktion soll die Backgroundfarbe des Bodys auf hotpink setzt und einen Parameter erwarten, welcher ein Element erwartet und die Backgroundfarbe dessen auf weiß setzt mit der Schriftfarbe hotpink
// Das zu übergebene Element soll der Button selbst sein

const button = document.createElement('button');
button.innerText = 'Hier Klicken';
button.style.display = 'block';
button.style.margin = '25% auto';
button.style.padding = '10px 20px';
document.body.appendChild(button);

button.addEventListener('click', async () => {
  try {
    const module = await import('./styling.js');
    module.styleELement(button);
  } catch (err) {
    console.error("Fehler beim Laden:", err);
  }
})
