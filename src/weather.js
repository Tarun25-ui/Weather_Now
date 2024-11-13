import { useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // Function to get coordinates for the city (Open-Meteo requires latitude and longitude)
  const getCoordinates = async (city) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
      );
      const data = await response.json();
      if (data.length > 0) {
        return {
          latitude: data[0].lat,
          longitude: data[0].lon,
        };
      } else {
        alert("City not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
      return null;
    }
  };

  // Function to fetch weather data from Open-Meteo
  const fetchWeather = async () => {
    const coordinates = await getCoordinates(city);
    if (!coordinates) return;

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current_weather=true`
      );
      const data = await response.json();
      if (data.current_weather) {
        setWeather(data.current_weather);
      } else {
        alert("Weather data not available");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && (
        <div className="weather-info">
          <h2>{city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} m/s</p>
          <p>Wind Direction: {weather.winddirection}°</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
