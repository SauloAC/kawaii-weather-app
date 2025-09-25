import { addOnClickFiveDaysForecast } from "./addOnClickFiveDaysForecast";
import { cityName, lat, pwChecker } from "./data";
import { weatherCheck } from "./weatherCheck";

export const errorCallBack = async () => {
  // Setting Vancouver as default city if user denies Location access
  cityName = `Vancouver, BC, Canada`;
  lat = 49.24;
  lon = -123.11;
  // when reload the page, every information change to default city
  pwChecker++;
  weatherCheck();
  addOnClickFiveDaysForecast();
};
