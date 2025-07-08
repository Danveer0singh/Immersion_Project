import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { getWeatherDataByCity, getWeatherDataByCoords } from './services/weatherApi';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Try to get user's location on load
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLoading(true);
          try {
            const data = await getWeatherDataByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
            setWeather(data);
            setError('');
          } catch (err) {
            setError('Failed to fetch weather for your location.');
          }
          setLoading(false);
        },
        (err) => {
          console.log('Geolocation denied or failed.', err);
        }
      );
    }
  }, []);

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherDataByCity(city);
      setWeather(data);
      setCity('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
    setLoading(false);
  };

  const formatTime = (timezoneOffset) => {
    const localDate = new Date(new Date().getTime() + timezoneOffset * 1000);
    return localDate.toUTCString().slice(-12, -4);
  };

  return (
    <div className="App">
      <h1>Weather App 🌦️</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Local Time: {formatTime(weather.timezone)}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Temperature: {Math.round(weather.main.temp)}°C (Feels like {Math.round(weather.main.feels_like)}°C)</p>
          <p>Condition: {weather.weather[0].main}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {Math.round(weather.wind.speed * 3.6)} km/h</p>
        </div>
      )}
    </div>
  );
};

export default App;
