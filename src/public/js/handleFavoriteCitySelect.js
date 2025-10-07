import { checkIfCityIsFavorite } from "./checkIfCityIsFavorite.js";
import { state } from "./data.js";
import { weatherCheck } from "./weatherCheck.js";

// Handle favorite city dropdown selection
export const handleFavoriteCitySelect = async () => {
  const favCitySelect = document.getElementById("favoriteCity");
  if (!favCitySelect) return;

  const selectedCity = favCitySelect.value;

  // Ignore if placeholder is selected
  if (!selectedCity || selectedCity === "city") return;

  // Update state with selected city name
  state.cityName = selectedCity;

  const { apiKey } = await import("./config.js");
  const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    selectedCity
  )}&limit=1&appid=${apiKey}`;

  try {
    const response = await fetch(geocodeUrl);
    const data = await response.json();

    if (data && data.length > 0) {
      // Update coordinates in state
      state.lat = data[0].lat;
      state.lon = data[0].lon;

      // Reset pwChecker and fetch weather data
      state.pwChecker = 0;
      state.pwChecker++;
      weatherCheck();

      // Update star checkbox
      checkIfCityIsFavorite();
    }
  } catch (error) {
    console.error("Error fetching city coordinates:", error);
  }
};
