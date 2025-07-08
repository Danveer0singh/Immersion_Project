const API_KEY = 'ed2c6f01bb2131ab77462e6db97d0939'; // your key

export const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('City not found');
  }
  return await response.json();
};
