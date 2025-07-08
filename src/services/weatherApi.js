
const API_KEY = 'ed2c6f01bb2131ab77462e6db97d0939';

export async function getWeatherByCity(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error('City not found');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
