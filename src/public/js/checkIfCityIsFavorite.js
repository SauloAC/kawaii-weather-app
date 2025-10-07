import { state } from "./data.js";

// Check if current city is in favorites and update star checkbox
export const checkIfCityIsFavorite = () => {
  const starCheck = document.getElementById("star");
  if (!starCheck) return;

  // Get saved cities from localStorage
  const savedCitiesJSON = localStorage.getItem("favoriteCities");
  const savedCities = savedCitiesJSON ? JSON.parse(savedCitiesJSON) : [];

  // Check if current city is in favorites
  const cityIndex = savedCities.indexOf(state.cityName);
  starCheck.checked = cityIndex !== -1;
};
