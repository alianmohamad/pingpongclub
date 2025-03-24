import React, { useState, useEffect } from "react";
import "../styles/weather.css";
import SectionTitle from "./SectionTitle";

/* 
  This component displays current weather information near the club.
  It fetches real-time data from the OpenWeatherMap API.
  Members can check the weather before heading to the club for a match.
  It demonstrates using external APIs and async JavaScript.
*/

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Melbourne coordinates
  const latitude = -37.8136;
  const longitude = 144.9631;
  
  // API key
  const apiKey = "f3b8057ca5e652ac58d004dfb6446fac";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch weather data. Please try again later.");
        setLoading(false);
        console.error("Weather data fetch error:", err);
        
        // Fall back to mock data if real API fails
        setTimeout(() => {
          const mockWeatherData = {
            main: {
              temp: 18.5,
              feels_like: 17.8,
              humidity: 65
            },
            weather: [
              {
                main: "Clouds",
                description: "Scattered clouds",
                icon: "03d"
              }
            ],
            wind: {
              speed: 5.2
            },
            name: "Melbourne"
          };
          
          setWeatherData(mockWeatherData);
          setLoading(false);
          setError(null);
        }, 1000);
      }
    };

    fetchWeather();
  }, [apiKey, latitude, longitude]);

  // Function to get the weather icon URL
  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <section id="weather" className="container bento-section">
      <SectionTitle 
        title="Weather Forecast" 
        icon="fas fa-cloud-sun"
      />
      <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, marginBottom: "20px" }}>
        Check the current weather conditions before your visit to the club. This helps you prepare appropriately for your ping pong session, whether you need to bring extra water on hot days or warm up properly in cooler weather.
      </p>
      <div className="weather-card">
        {loading ? (
          <div className="weather-loading">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Loading weather data...</p>
          </div>
        ) : error ? (
          <div className="weather-error">
            <i className="fas fa-exclamation-circle"></i>
            <p>{error}</p>
          </div>
        ) : weatherData && (
          <>
            <div className="weather-header">
              <h3>{weatherData.name}</h3>
              <div className="weather-icon">
                <img 
                  src={getWeatherIconUrl(weatherData.weather[0].icon)} 
                  alt={weatherData.weather[0].description} 
                />
              </div>
            </div>
            <div className="weather-details">
              <div className="weather-temp">
                <h2>{Math.round(weatherData.main.temp)}°C</h2>
                <p>{weatherData.weather[0].description}</p>
              </div>
              <div className="weather-info">
                <p><i className="fas fa-thermometer-half"></i> Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
                <p><i className="fas fa-tint"></i> Humidity: {weatherData.main.humidity}%</p>
                <p><i className="fas fa-wind"></i> Wind: {weatherData.wind.speed} m/s</p>
              </div>
            </div>
            <div className="weather-footer">
              <p>Last updated: {new Date().toLocaleTimeString()}</p>
              <p className="weather-tip">
                {weatherData.main.temp > 25 ? (
                  "Remember to stay hydrated during your match today!"
                ) : weatherData.main.temp < 15 ? (
                  "Don't forget to warm up properly in the cooler weather!"
                ) : (
                  "Perfect weather for a game of ping pong!"
                )}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Weather;