import { addOnClickFiveDaysForecast } from "./addOnClickFiveDaysForecast.js";
import { state } from "./data.js";
import { weatherCheck } from "./weatherCheck.js";

export const errorCallBack = async () => {
  // Setting Vancouver as default city if user denies Location access
  state.cityName = `Vancouver, BC, Canada`;
  state.lat = 49.24;
  state.lon = -123.11;

  // when reload the page, every information change to default city
  state.pwChecker++;

  weatherCheck();
  addOnClickFiveDaysForecast();
};
