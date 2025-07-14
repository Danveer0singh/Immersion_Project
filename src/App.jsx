import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import About from "./pages/About";
import WeatherMap from "./pages/WeatherMap";
import WeatherNews from "./pages/WeatherNews";
import "./App.css";

function App() {
  return (
    <div className="app">
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/17620068/17620068-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/forecast">Forecast</Link> |{" "}
        <Link to="/map">Weather Map</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/news">Weather News</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/map" element={<WeatherMap />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<WeatherNews />} />
      </Routes>
    </div>
  );
}

export default App;
