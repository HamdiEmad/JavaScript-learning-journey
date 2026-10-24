const weatherForm = document.getElementById("weather");
const cityInput = document.querySelector(".cityInput");

const cityDisplay = document.querySelector(".cityDisplay");
const tempDisplay = document.querySelector(".temp");
const humidityDisplay = document.querySelector(".humidity");
const descDisplay = document.querySelector(".desc");
const emojiDisplay = document.querySelector(".emoji");
const errorDisplay = document.querySelector(".error");

if (errorDisplay) {
    errorDisplay.style.display = "none";
}

if (weatherForm && cityInput) {
    weatherForm.addEventListener("submit", async event => {
        event.preventDefault();

        const city = cityInput.value.trim();

        if (!city) {
            showError("Please enter a city");
            return;
        }

        try {
            clearWeatherDisplay();
            if (errorDisplay) errorDisplay.style.display = "none";

            const geoResponse = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
            );

            if (!geoResponse.ok) {
                throw new Error("Failed to find the city");
            }

            const geoData = await geoResponse.json();

            if (!geoData.results || geoData.results.length === 0) {
                showError("City not found. Please try another city.");
                return;
            }

            const location = geoData.results[0];

            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code`
            );

            if (!weatherResponse.ok) {
                throw new Error("Failed to fetch weather data");
            }

            const weatherData = await weatherResponse.json();
            const current = weatherData.current;

            if (cityDisplay) cityDisplay.textContent = location.name;
            if (tempDisplay) tempDisplay.textContent = `${Math.round(current.temperature_2m)}°C`;
            if (humidityDisplay) humidityDisplay.textContent = `Humidity: ${current.relative_humidity_2m}%`;
            if (descDisplay) descDisplay.textContent = getWeatherDescription(current.weather_code);
            if (emojiDisplay) emojiDisplay.textContent = getWeatherEmoji(current.weather_code);

            cityInput.value = "";

        } catch (error) {
            showError("Something went wrong. Please try again.");
            console.error(error);
        }
    });
}

function showError(message) {
    if (errorDisplay) {
        errorDisplay.textContent = message;
        errorDisplay.style.display = "block";
    }
    clearWeatherDisplay();
}

function clearWeatherDisplay() {
    if (cityDisplay) cityDisplay.textContent = "";
    if (tempDisplay) tempDisplay.textContent = "";
    if (humidityDisplay) humidityDisplay.textContent = "";
    if (descDisplay) descDisplay.textContent = "";
    if (emojiDisplay) emojiDisplay.textContent = "";
}

function getWeatherDescription(code) {
    if (code === 0) return "Clear sky";
    if ([1, 2, 3].includes(code)) return "Partly cloudy";
    if ([45, 48].includes(code)) return "Foggy";
    if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
    if ([61, 63, 65, 66, 67].includes(code)) return "Rainy";
    if ([71, 73, 75, 77].includes(code)) return "Snowy";
    if ([80, 81, 82].includes(code)) return "Rain showers";
    if ([85, 86].includes(code)) return "Snow showers";
    if ([95, 96, 99].includes(code)) return "Thunderstorm";

    return "Unknown weather";
}

function getWeatherEmoji(code) {
    if (code === 0) return "☀️";
    if (code === 1) return "🌤️";
    if (code === 2) return "⛅";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";

    return "🌡️";
}