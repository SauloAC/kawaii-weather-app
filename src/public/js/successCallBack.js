import {
  cityName,
  googleApiKey,
  haveCountryName,
  lat,
  lon,
  pwChecker,
} from "./data";
import { weatherCheck } from "./weatherCheck";

export const successCallBack = async (position) => {
  haveCountryName = false;
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  cityName = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${googleApiKey}`;
  pwChecker++;
  weatherCheck();
};
