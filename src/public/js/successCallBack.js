import { addOnClickFiveDaysForecast } from "./addOnClickFiveDaysForecast.js";
import { state } from "./data.js";
import { weatherCheck } from "./weatherCheck.js";

export const successCallBack = async (position) => {
  state.haveCountryName = false;
  state.lat = position.coords.latitude;
  state.lon = position.coords.longitude;
  state.cityName = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${state.lat},${state.lon}&key=${state.googleApiKey}`;
  state.pwChecker++;
  weatherCheck();
  addOnClickFiveDaysForecast();
};
