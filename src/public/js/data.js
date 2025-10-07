import { config } from "./config.js";

export const state = {
  apiKey: config.apiKey,
  googleApiKey: config.googleApiKey,
  cityName: "",
  lat: 0,
  lon: 0,
  pwChecker: 0,
  array: [],
  haveCountryName: true,
};
