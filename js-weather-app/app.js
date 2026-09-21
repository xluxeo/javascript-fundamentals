import {fetchWeather, formatResponse} from './weatherService.js';

/*Hauptanwendung:
- Import der Service-Funktionen
- Eingabefeld für Stadtname
- Button zum Laden der Wetterdaten
- Anzeige der Ergebnisse (Temperatur, Wetterbeschreibung, etc.)

API verwenden:
- Nutze die kostenlose OpenWeatherMap API
- Implementiere Fetch-Aufrufe mit async/await
- Behandle Fehler (ungültige Stadt, Netzwerkfehler)*/

const locationInput = document.getElementById('locationInput');
const loadButton = document.getElementById('loadButton');

// Ausgelagerte Funktion zum Laden der Wetterdaten
async function loadWeather() {
  const location = locationInput.value.trim();
  if (!location) return;

  try {
    const rawData = await fetchWeather(location);
    const formatted = formatResponse(rawData);

    document.getElementById('weather-info').style.display = 'block';
    updateWeatherUI(formatted);

  } catch (error) {
    resetUI(error.message);
  }
}

// Abfrage nach Wetterdaten beim Laden des Buttons oder Enter-Taste
locationInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    loadWeather();
  }
});

loadButton.addEventListener('click', loadWeather);

// Wetterdaten in der UI aktualisieren
function updateWeatherUI(data) {
  document.getElementById('location').textContent = data.name;
  document.getElementById('temperature').textContent = data.temperature;
  document.getElementById('description').textContent = data.description;
  document.getElementById('humidity').textContent = data.humidity;
  document.getElementById('windSpeed').textContent = data.wind;
  document.getElementById('country').textContent = data.country;

  const icon = document.getElementById('weather-icon');
  icon.src = data.icon;
  icon.alt = data.description;
  icon.classList.remove('is-hidden');
}


// UI bei Fehler zurücksetzen
function resetUI(message = "") {
  document.getElementById('weather-info').style.display = 'none';
  document.getElementById('location').textContent = message;
  document.getElementById('weather-icon').classList.add('is-hidden');
}
