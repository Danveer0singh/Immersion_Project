import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import About from './pages/About';
import 'leaflet/dist/leaflet.css';
import WeatherMap from './pages/WeatherMap';

function App() {
  return (
    <div className="app">
      {/* Background video */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/weather-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation bar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/forecast">Forecast</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/map">Weather Map</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<WeatherMap />} />
      </Routes>
    </div>
  );
}

export default App;
