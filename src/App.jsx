
import React, { useState } from 'react';
import { getWeatherByCity } from './services/weatherApi';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (!city) return;
    const data = await getWeatherByCity(city);
    setWeather(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
