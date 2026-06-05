// Aufgabe 1:
const minionBlaBla = "Minions ipsum voluptate hana dul sae uuuhhh ullamco po kass. Butt velit tempor duis ex me want bananaaa! Officia. Adipisicing pepete duis baboiii bee do bee do bee do. Aliquip cillum incididunt consectetur hana dul sae. Nisi velit baboiii chasy gelatooo ti aamoo! Poulet tikka masala. Adipisicing qui occaecat tulaliloo quis. Aute pepete sit amet magna jeje hana dul sae belloo! Hana dul sae para tú ex. Dolore dolor adipisicing laboris daa enim veniam daa me want bananaaa! Aute me want bananaaa! Ut eiusmod irure irure chasy labore poopayee tank yuuu! Officia."
console.log(minionBlaBla.length); // Länge des Strings: 562

// Aufgabe 2:
if (minionBlaBla.length === 0) {
  console.log("Der String ist leer");
}
else {
  console.log("Der String ist nicht leer"); // Der String ist nicht leer
}

// Aufgabe 3:
const prefix = "Bob says: ";
const fullString = prefix + minionBlaBla;
const anotherFullString = prefix.concat(minionBlaBla);
console.log(fullString);
console.log(anotherFullString);

// Aufgabe 4:
const enthaeltPoulet = minionBlaBla.includes("Poulet");
console.log(enthaeltPoulet); // true

// Aufgabe 5:
const endetMitMinion = minionBlaBla.endsWith("Minion");
console.log(endetMitMinion); // false

// Aufgabe 6:
const startetMitMinions = minionBlaBla.startsWith("Minions");
console.log(startetMitMinions); // true

// Aufgabe 7:
const letzterIndexBananaa = minionBlaBla.lastIndexOf("bananaaa");
console.log(letzterIndexBananaa); // 488

// Aufgabe 8:
const teilungAnAusrufezeichen = minionBlaBla.split("!");
console.log( teilungAnAusrufezeichen); // [object Array] (7)

// Aufgabe 9:
const allesKlein = minionBlaBla.toLowerCase();
console.log(allesKlein);

// Aufgabe 10:
const ersetzenPunkte = minionBlaBla.replaceAll(".", "!");
console.log(ersetzenPunkte);

// Aufgabe 11:
const wiederholenBananaa = minionBlaBla + " bananaaa! ".repeat(3);
console.log(wiederholenBananaa);

// Aufgabe 12:
const wiederholenCerveza = "cerveza ".repeat(3) + minionBlaBla;
console.log(wiederholenCerveza);

// Aufgabe 13:
const foo =  "Minions ipsum jeje poopayee uuuhhh."
const ergebnis = foo.replace("jeje", `jeje ${"Gelatooo ".repeat(3)}`);
console.log(ergebnis);

// Aufgabe 14:
const teilungString = foo.slice(3, 10);
console.log(teilungString);

// Aufgabe 15:
const bar = "              Minions ipsum jiji belloo! Poulet tikka masala underweaaar bappleees gelatooo bananaaaa potatoooo.          "
const trimmenAnfang = bar.trimStart();
console.log(trimmenAnfang);
const trimmenEnde = bar.trimEnd();
console.log(trimmenEnde);
