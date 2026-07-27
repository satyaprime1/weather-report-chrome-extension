const weatherDiv = document.getElementById("weather");

document
.getElementById("searchBtn")
.addEventListener("click", getWeatherByCity);

async function getWeatherByCity() {

    const city = document
        .getElementById("cityInput")
        .value
        .trim();

    if(city===""){
        weatherDiv.innerHTML="Please enter a city.";
        return;
    }

    try{

        // Find latitude & longitude
        const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );

        const geoData = await geoResponse.json();

        if(!geoData.results){

            weatherDiv.innerHTML="City not found.";

            return;

        }

        const latitude=geoData.results[0].latitude;
        const longitude=geoData.results[0].longitude;

        // Weather
        const weatherResponse = await fetch(

        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`

        );

        const weatherData=await weatherResponse.json();

        const current=weatherData.current;

        weatherDiv.innerHTML=`

        <h2>📍 ${geoData.results[0].name}</h2>

        <div class="temp">

        ${current.temperature_2m}°C

        </div>

        <h3>

        ${weatherDescription(current.weather_code)}

        </h3>

        <p>

        💧 Humidity :
        ${current.relative_humidity_2m}%

        </p>

        <p>

        💨 Wind :
        ${current.wind_speed_10m} km/h

        </p>

        `;

    }

    catch(error){

        console.log(error);

        weatherDiv.innerHTML="Something went wrong.";

    }

}

function weatherDescription(code){

switch(code){

case 0:
return "☀️ Clear Sky";

case 1:
case 2:
case 3:
return "⛅ Partly Cloudy";

case 45:
case 48:
return "🌫️ Fog";

case 51:
case 53:
case 55:
return "🌦️ Drizzle";

case 61:
case 63:
case 65:
return "🌧️ Rain";

case 71:
case 73:
case 75:
return "❄️ Snow";

case 80:
case 81:
case 82:
return "🌦️ Rain Showers";

case 95:
return "⛈️ Thunderstorm";

default:
return "🌤️ Unknown";

}

}