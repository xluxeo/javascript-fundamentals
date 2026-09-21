export default async function handler(request, response) {
  const queryCity = request.query?.city || new URL(request.url, 'http://localhost').searchParams.get('city');
  const city = String(queryCity || '').trim();

  if (!city) {
    return response.status(400).json({error: 'Bitte eine Stadt angeben'});
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return response.status(500).json({error: 'API-Konfiguration fehlt'});
  }

  const apiUrl = new URL('https://api.openweathermap.org/data/2.5/weather');
  apiUrl.searchParams.set('q', city);
  apiUrl.searchParams.set('appid', apiKey);
  apiUrl.searchParams.set('units', 'metric');
  apiUrl.searchParams.set('lang', 'de');

  try {
    const weatherResponse = await fetch(apiUrl);
    const data = await weatherResponse.json();

    if (!weatherResponse.ok) {
         if (weatherResponse.status === 404) {
        return response.status(404).json({error: 'Stadt nicht gefunden'});
      }

      if (weatherResponse.status === 401) {
        return response.status(502).json({error: 'OpenWeather API-Schlüssel ist ungültig'});
      }

      if (weatherResponse.status === 429) {
        return response.status(502).json({error: 'OpenWeather API-Limit erreicht'});
      }

      return response.status(502).json({
        error: data.message ? `OpenWeather: ${data.message}` : 'Wetterdienst nicht erreichbar'
      });
    }

    return response.status(200).json(data);
  } catch {
    return response.status(502).json({error: 'Wetterdienst nicht erreichbar'});
  }
}
