import { cityName, haveCountryName } from "./data";
import { getIconByWeather } from "./getIconByWeather";

// get current weather information from json
export const getCurrentHour = (weather) => {
  let addressArray = cityName.split(", ");
  let lastAddressArray = -1;
  for (i = 0; i < addressArray.length; i++) {
    lastAddressArray++;
  }
  if (haveCountryName) {
    document.getElementById("city").innerHTML = addressArray[0];
    document.getElementById("contry").innerHTML =
      addressArray[lastAddressArray];
  } else {
    document.getElementById("city").innerHTML = weather.name;
    document.getElementById("country").innerHTML = weather.sys.country;
    cityName = `${weather.name}, ${weather.sys.country}`;
  }
  haveCountryName = true;
  document.getElementById("temperature").innerHTML =
    Math.round(weather.main.temp) + "°C";
  document.getElementById("fellsLike").innerHTML =
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
};
