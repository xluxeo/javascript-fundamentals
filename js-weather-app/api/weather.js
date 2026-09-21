export default async function handler(request, response) {
  const city = String(request.query.city || '').trim();

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
      return response.status(weatherResponse.status === 404 ? 404 : 502).json({
        error: weatherResponse.status === 404 ? 'Stadt nicht gefunden' : 'Wetterdienst nicht erreichbar'
      });
    }

    return response.status(200).json(data);
  } catch {
    return response.status(502).json({error: 'Wetterdienst nicht erreichbar'});
  }
}