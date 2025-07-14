import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WeatherMap = () => {
    const [layer, setLayer] = useState("temp_new");
    const apiKey = "ed2c6f01bb2131ab77462e6db97d0939";

    return (
        <div className="map-page">
            <h2>India Weather Map 🌏</h2>
            <div className="button-group">
                <button onClick={() => setLayer("temp_new")}>Temperature</button>
                <button onClick={() => setLayer("clouds_new")}>Clouds</button>
                <button onClick={() => setLayer("wind_new")}>Wind</button>
                <button onClick={() => setLayer("precipitation_new")}>Precipitation</button>
            </div>
            <div className="map-card">
                {/* 👇 This is where your MapContainer goes */}
                <MapContainer
                    center={[22.9734, 78.6569]}
                    zoom={5}
                    style={{ height: "500px", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${apiKey}`}
                    />
                </MapContainer>
            </div>
        </div>
    );
};

export default WeatherMap;