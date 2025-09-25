// get Latitude and Longitude from Json
export const findPlace = (data) => {
  lat = data.results[0].geometry.location.lat;
  lon = data.results[0].geometry.location.lon;
  console.log(`Lat${lat}, Lon${lon}`);
};
