# Weather Now 🌤️

A simple and intuitive weather application that provides real-time weather updates for any city. Built using React, this app fetches data from the OpenWeatherMap API to display temperature, humidity, wind speed, and weather conditions.

## Project Overview

**Weather Now** allows users to:
- Search for any city’s weather by name.
- View the temperature in Celsius, along with humidity and wind speed.
- Get accurate weather descriptions (e.g., "clear sky", "light rain").

## Features

- **React**: Frontend built with reusable components.
- **API Integration**: Fetches weather data from the OpenWeatherMap API.
- **Responsive Design**: Optimized for both desktop and mobile screens.

## Installation

Follow these steps to set up the project locally.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-now.git
   cd weather-now

 2. Install dependencies:
                npm install

 3. Start the application:
                    npm start

 4. Access the app:
                    Access the app:

 Usage
 1.Enter a city name in the input field.
 2.Click Get Weather to fetch and display the current weather data for the specified city.
 3.View weather details including:
 *Temperature in Celsius
 *Wind Speed in m/s
 *Wind Direction in degrees
 

APIs Used
1. Open-Meteo API:

 * Provides real-time weather data based on geographic coordinates (latitude and longitude).
 * No API key is required, making it easy to integrate and secure.

2.Nominatim API (OpenStreetMap):

 * Converts city names to latitude and longitude coordinates.
 * No API key is required, and it allows for straightforward location-based queries.

Technologies Used
 * React for the user interface and state management.
 *Open-Meteo API for weather data.
 *Nominatim API for geolocation.
 *CSS for styling.