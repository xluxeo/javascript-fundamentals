// Aufgabenstellung:
// An jeder ausgegebenen Lieferadresse gibt es einen Radio-Button, an dem ein Klick-Event-Listener registriert werden soll. Bei Klick auf den Radio-Button soll die jeweilige Lieferadresse in die  entsprechenden Input-Felder übernommen werden.

const deliveryAddresses = [
  {
    firstname: "Jeffrey",
    lastname: "Lebowski",
    street: "Hollow way drive",
    no: "8645",
    city: "West Hollywood",
    zip: "12345"
  },
  {
    firstname: "El",
    lastname: "Duderino",
    street: "Dude road",
    no: "8645",
    city: "Hollywood",
    zip: "12345"
  }
];

/******* You can start here with coding ******/
// Radio Buttons erzeugen
// Für jeden Eintrag in der const "deliveryAddresses" soll es einen Radio Button geben. Nach Möglichkeit dynamisch (anhand der Einträge), bei Startproblemen ist auch erstmal statisch (jeden Radio Button einzeln anlegen) ok.
const fieldset = document.querySelector('.js-delivery-addresses');

deliveryAddresses.forEach(function (address, index) {
  const label = document.createElement("label");
  const deliveryAddressId = "deliveryAddress-" + index;
  label.classList.add("address-label");
  label.for = deliveryAddressId;

  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.id = deliveryAddressId;
  radioButton.name = "deliveryAddress";
  radioButton.value = index;

  const addressText = document.createElement("span");
  addressText.classList.add("address-text");
  addressText.innerHTML = `
  ${address.firstname} ${address.lastname} <br>
  ${address.street} ${address.no} <br>
  ${address.city} ${address.zip}
`;

  label.appendChild(radioButton);
  label.appendChild(addressText);
  fieldset.appendChild(label);

  // Event-Listener an den Radio-Buttons registrieren
  // Achtung: Es gibt mehr als einen
  radioButton.addEventListener('click', function () {

    // Ermitteln welcher Radiobutton geklickt wurde.
    // Tipp: hier ist der Index oder der value des radio-Buttons hilfreich
    //Damit die entsprechenden Daten aus dem Array ermitteln
    const selectedAddress = deliveryAddresses[index];

    // Die Daten aus dem Javascript-Objekt in die Input-Felder schreiben
    document.getElementById('firstname').value = selectedAddress.firstname;
    document.getElementById('lastname').value = selectedAddress.lastname;
    document.getElementById('streetNo').value = selectedAddress.street + ' ' + selectedAddress.no;
    document.getElementById('zip').value = selectedAddress.zip;
    document.getElementById('city').value = selectedAddress.city;
  });
});
