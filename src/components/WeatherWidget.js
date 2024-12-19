import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherWidget.css';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = '139df5e6deeab7f4129d6a3fcf58bece'; 
  const city = 'Huaraz,pe';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-widget">
      <h3>Clima en Huaraz</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : weather ? (
        <div className="weather-content">
          <div className="weather-temp">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Icono del clima"
            />
            <span>{Math.round(weather.main.temp)}°C</span>
          </div>
          <p>{weather.weather[0].description}</p>
          <p>Humedad: {weather.main.humidity}%</p>
          <p>Viento: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No se pudo obtener la información del clima.</p>
      )}
    </div>
  );
}

export default WeatherWidget;
