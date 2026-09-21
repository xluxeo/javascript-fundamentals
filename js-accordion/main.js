const accordionList = document.querySelectorAll('.js-accordion');
const toggleAllBtn = document.querySelector('.js-toggle-all');
const isActive = "is-active";
const largeAccordion = "accordion--large"
const secondaryAccordion = "accordion--secondary";

//Funktionen
//Funktion für Aufgabe b
function closeAll () {
  accordionList.forEach(accordion => {
    accordion.classList.remove(isActive);
  })
}

//Funktion für Aufgabe c
function toggleAll () {
  accordionList.forEach(accordion => {
    if (toggleAllBtn.classList.contains(isActive)) {
      accordion.classList.remove(isActive)
    } else {
      accordion.classList.add(isActive)
    }
  })
  toggleAllBtn.classList.toggle(isActive)
}

//Funktion für Aufgabe d
function modifyAccordion (accordion) {
  if (accordion.classList.contains(secondaryAccordion)) {
    accordion.classList.remove(secondaryAccordion);
  } else if (accordion.classList.contains(largeAccordion)) {
    accordion.classList.remove(largeAccordion);
    accordion.classList.add(secondaryAccordion);
  } else {
    accordion.classList.add(largeAccordion);
  }
}

//a) Schreibe das Javascript für die "Standard" Funktionalität; bei Klick auf einen Title öffnet sich das Accordion. Ein Erneuter Klick schließt es. Es können beliebig viele Items gleichzeitig geöffnet sein.
accordionList.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const isOpen = accordion.classList.contains(isActive);

    //b) Es soll nur noch ein Item zur Zeit geöffnet werden können. Ist bereits eins geöffnet, muss sich dieses erst schließen, bevor sich das neue öffnen darf.
    closeAll();
    if (!isOpen) {
      accordion.classList.add(isActive);
    }
  })

  //d) Bei einem Doppelklick (gesamtes Accordion Element) soll erst der Modifier "accordion--large" und bei einem erneuten Doppelklick "accordion--secondary" hinzugefügt werden.
  accordion.addEventListener('dblclick', () => {
    modifyAccordion(accordion);
  })

})

//c) Der Button "Toggle all" soll bei Klick sämtliche Items öffnen oder schließen (unabhängig vom aktuellen Zustand der einzelnen Items)
toggleAllBtn.addEventListener('click', (event) => {
  event.preventDefault();
  toggleAll();
})
