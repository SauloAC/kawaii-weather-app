import { addOnClickFiveDaysForecast } from "./addOnClickFiveDaysForecast.js";
import { config } from "./config.js";
import { state } from "./data.js";
import { weatherCheck } from "./weatherCheck.js";

// Handle favorite city dropdown selection
export const handleFavoriteCitySelect = async () => {
  const favCitySelect = document.getElementById("favoriteCity");
  if (!favCitySelect) return;

  const selectedCity = favCitySelect.value;

  // Ignore if placeholder is selected
  if (!selectedCity || selectedCity === "city") {
    return;
  }

  // Update state with selected city name
  state.cityName = selectedCity;
  state.haveCountryName = true;

  const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    selectedCity
  )}&limit=1&appid=${config.apiKey}`;

  try {
    const response = await fetch(geocodeUrl);
    const data = await response.json();

    if (data && data.length > 0) {
      // Update coordinates in state
      state.lat = data[0].lat;
      state.lon = data[0].lon;

      state.pwChecker = 0;
      state.pwChecker++;

      // Fetch weather data
      weatherCheck();

      setTimeout(() => {
        addOnClickFiveDaysForecast();
      }, 1500);
    }
  } catch (error) {
    console.error("Error fetching city coordinates:", error);
  }
};
