import { renderProfile, renderError } from './profile.js';

//Erstelle eine asynchrone Funktion "fetchUser", die folgende Schnittstelle abruft: https://jsonplaceholder.typicode.com/users/1
//Die Funktion soll nach erfolgreichem fetch der Daten, die Felder name, adress und company vollständig ausgeben
async function fetchUser(id) {
  try {
    const url = (`https://jsonplaceholder.typicode.com/users/${id}`)
    const fetchResponse = await fetch(url);
    if (!fetchResponse.ok) {
      throw new Error(`User mit ID ${id} wurde nicht gefunden.`)
    }
    const data = await fetchResponse.json();
    renderProfile(data);
  } catch (err) {
    renderError(err.message || 'Ein Fehler ist aufgetreten.');
  }
}

fetchUser(1);
