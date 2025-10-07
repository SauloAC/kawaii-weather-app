import { checkIfCityIsFavorite } from "./checkIfCityIsFavorite.js";
import { state } from "./data.js";
import { getIconByWeather } from "./getIconByWeather.js";

// get current weather information from json
export const getCurrentHour = (weather) => {
  const addressArray = state.cityName.split(", ");
  let lastAddressArray = -1;
  for (let i = 0; i < addressArray.length; i++) {
    lastAddressArray++;
  }
  if (state.haveCountryName) {
    document.getElementById("city").innerHTML = addressArray[0];
    document.getElementById("country").innerHTML =
      addressArray[lastAddressArray];
  } else {
    document.getElementById("city").innerHTML = weather.name;
    document.getElementById("country").innerHTML = weather.sys.country;
    state.cityName = `${weather.name}, ${weather.sys.country}`;
  }
  state.haveCountryName = true;
  document.getElementById("temperature").innerHTML =
    Math.round(weather.main.temp) + "°C";
  document.getElementById("feelsLike").innerHTML =
    "Feels like: " + Math.round(weather.main.feels_like) + "°C";
  document.getElementById("minTemp").innerHTML =
    "Min: " + Math.round(weather.main.temp_min) + "°C";
  document.getElementById("maxTemp").innerHTML =
    "Max: " + Math.round(weather.main.temp_max) + "°C";
  document.getElementById("currentForecastDayStatus").innerHTML =
    weather.weather[0].description;
  getIconByWeather(
    weather.weather[0].description,
    document.getElementById("currentWeather")
  );

  checkIfCityIsFavorite();
};
