/*WeatherService-Modul erstellen:
- Funktion zum Abrufen aktueller Wetterdaten für eine Stadt
- Funktion zum Formatieren der API-Antwort
- Verwendung von Named Exports

API verwenden:
- Nutze die kostenlose OpenWeatherMap API
- Implementiere Fetch-Aufrufe mit async/await
- Behandle Fehler (ungültige Stadt, Netzwerkfehler*/

export async function fetchWeather(location) {
  const response = await fetch(`/api/weather?city=${encodeURIComponent(location)}`);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Server-Fehler (${response.status})`);
  }

  return data;
}

export function formatResponse(data) {
  return {
    name: data.name,
    temperature: `${Math.round(data.main.temp)}°C`,
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    humidity: `Luftfeuchtigkeit: ${data.main.humidity}%`,
    wind: `Windgeschwindigkeit: ${data.wind.speed}m/s`,
    country: `Land: ${data.sys.country}`
  }
}
