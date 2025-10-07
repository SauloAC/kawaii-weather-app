import { addOnClickFiveDaysForecast } from "./addOnClickFiveDaysForecast.js";
import { state } from "./data.js";
import { weatherCheck } from "./weatherCheck.js";

export const findPlace = (data) => {
  // If called with data, process the Google Maps geocoding response
  if (data) {
    const addressArray = data.results[0].formatted_address.split(", ");
    state.cityName = data.results[0].formatted_address;

    // Update city and country display
    if (addressArray.length >= 2) {
      document.getElementById("city").innerHTML = addressArray[0];
      document.getElementById("country").innerHTML =
        addressArray[addressArray.length - 1];
    }
    return;
  }

  // Otherwise, set up search bar event listeners (initialization)
  const input = document.getElementById("sbox1");
  const searchBtn = document.getElementById("sbtn1");

  if (!input || !searchBtn) return;

  // Add search button click handler
  searchBtn.addEventListener("click", async () => {
    const cityInput = input.value.trim();
    if (!cityInput) return;

    try {
      // Geocode the city name using OpenWeatherMap
      const geocodeResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=${state.apiKey}`
      );
      const geocodeData = await geocodeResponse.json();

      if (geocodeData.length === 0) {
        alert("City not found. Please try again.");
        return;
      }

      const { lat, lon, name, country } = geocodeData[0];
      state.lat = lat;
      state.lon = lon;
      state.cityName = `${name}, ${country}`;
      state.haveCountryName = true;
      state.pwChecker = 1;

      // Trigger weather data fetch
      weatherCheck();
      addOnClickFiveDaysForecast();
    } catch (error) {
      console.error("Error searching for city:", error);
      alert("Error searching for city. Please try again.");
    }
  });

  // Add enter key support
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
};
