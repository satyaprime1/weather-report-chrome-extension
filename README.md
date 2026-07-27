# Weather Report – Chrome Extension

#### Video Demo: <https://youtu.be/I1Anp3ZbgTg>

## Description

Weather Report is a Google Chrome extension that allows users to search for any city and instantly view its current weather conditions. The extension is built using HTML, CSS, and JavaScript and retrieves real-time weather information from the Open-Meteo API. The project was developed to provide a simple, lightweight, and user-friendly way of checking the weather without opening a separate website or application.

The primary goal of this project was to learn how Chrome extensions work and how browser extensions can communicate with external APIs. During development, I explored Chrome Extension Manifest V3, asynchronous JavaScript using the Fetch API, API integration, event handling, and responsive user interface design.

## Features

- Search weather by city name.
- Displays current temperature in Celsius.
- Shows weather condition (Clear Sky, Rain, Fog, Snow, etc.).
- Displays humidity percentage.
- Displays wind speed.
- Clean and modern user interface.
- Lightweight with no API key required.
- Works directly inside Google Chrome.

## Project Structure

### manifest.json

The `manifest.json` file is the configuration file required by every Chrome extension. It defines the extension name, version, permissions, host permissions, and the popup page that opens when the extension icon is clicked.

This file also grants permission to access the Open-Meteo Weather API and the Open-Meteo Geocoding API so that weather information can be retrieved from external servers.

### popup.html

The `popup.html` file contains the user interface of the extension.

It includes:

- Project title
- Input box for entering a city
- "Get Weather" button
- Weather display section
- Author credit ("By Satya")

This file acts as the main interface that users interact with whenever they open the extension.

### popup.css

The `popup.css` file is responsible for the appearance of the extension.

It styles:

- Background color
- Input box
- Search button
- Temperature display
- Weather information
- Overall card layout
- Author credit positioning

The interface was intentionally designed to be clean, modern, and easy to use while fitting inside Chrome's popup window.

### popup.js

The `popup.js` file contains all of the application's logic.

Its responsibilities include:

- Reading the city entered by the user.
- Sending a request to the Open-Meteo Geocoding API to obtain the latitude and longitude of the city.
- Using those coordinates to request current weather information from the Open-Meteo Weather API.
- Processing the JSON response.
- Displaying temperature, weather description, humidity, and wind speed inside the popup.
- Handling invalid city names and displaying appropriate error messages.

The JavaScript code makes extensive use of asynchronous programming through the `async` and `await` keywords to ensure that API requests do not block the user interface.

## APIs Used

This project uses two free APIs provided by Open-Meteo.

### Open-Meteo Geocoding API

This API converts a city name into geographic coordinates (latitude and longitude). These coordinates are required because the weather API accepts coordinates rather than city names.

### Open-Meteo Weather API

After obtaining the coordinates, this API returns the current weather information including:

- Temperature
- Weather code
- Humidity
- Wind speed

The weather codes returned by the API are converted into human-readable descriptions such as Clear Sky, Rain, Snow, and Thunderstorm using a JavaScript function.

## Design Decisions

Initially, I designed the extension to detect the user's current location using the browser's Geolocation API. Although this worked successfully, it required users to grant location permission every time they used the extension.

I decided to redesign the extension so that users could search for any city instead. This approach provides several advantages:

- Users can check weather anywhere in the world.
- No location permission is required.
- Better privacy.
- Easier testing and debugging.
- More flexible user experience.

I also experimented with the OpenWeatherMap API. However, that solution required an API key and I experienced activation issues during development. To simplify the project and remove external dependencies, I switched to the Open-Meteo APIs, which are free to use and do not require API keys.

Another design decision involved keeping the interface simple rather than adding excessive information. Instead of displaying many weather statistics, I focused on the most useful information: temperature, weather condition, humidity, and wind speed. This keeps the popup uncluttered and easy to read.

## Challenges Faced

During development I encountered several challenges.

The first challenge involved learning the Chrome Extension Manifest V3 structure and understanding how popup pages communicate with JavaScript.

Another challenge was working with external APIs and handling asynchronous requests correctly using JavaScript's Fetch API.

I also spent time debugging permission issues, API responses, and ensuring that invalid city names were handled gracefully without crashing the extension.

These challenges helped improve my understanding of JavaScript, browser extensions, and REST APIs.

## Future Improvements

If I continue developing this project, I would like to add several additional features:

- Five-day weather forecast
- Weather icons and animations
- Automatic dark mode
- Save favourite cities
- Recent search history
- Temperature unit switching (°C / °F)
- Sunrise and sunset times
- Air quality information
- Rain probability
- Automatic refresh every few minutes

These improvements would make the extension more useful and provide a richer user experience.

## Conclusion

This project provided valuable experience in developing Chrome extensions and integrating external REST APIs using JavaScript. It strengthened my understanding of asynchronous programming, API communication, browser permissions, and responsive user interface design.

Overall, the Weather Report Chrome Extension is a lightweight, practical application that demonstrates frontend web development skills and serves as a strong portfolio project for learning browser extension development.