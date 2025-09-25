import { apiKey, lat, lon } from "./data";
import { getData } from "./getData";

export const weatherCheck = () => {
  let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  let threeHour = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  getData(currentWeather);
  getData(threeHour);
};
