import { config } from "./config.js";
import { state } from "./data.js";
import { getData } from "./getData.js";

export const weatherCheck = () => {
  const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${state.lat}&lon=${state.lon}&appid=${config.apiKey}&units=metric`;
  const threeHour = `https://api.openweathermap.org/data/2.5/forecast?lat=${state.lat}&lon=${state.lon}&appid=${config.apiKey}&units=metric`;

  getData(currentWeather);
  getData(threeHour);
};
