import { cityName, googleApiKey } from "./data";
import { getData } from "./getData";
import { weatherCheck } from "./weatherCheck";

export const changeInfo = async () => {
  let placeName = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${googleApiKey}`;
  await getData(placeName);
  await weatherCheck();
};
