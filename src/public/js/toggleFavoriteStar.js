import { state } from "./data.js";

// Handle star checkbox click to add/remove city from favorites
export const toggleFavoriteStar = () => {
  const starCheck = document.getElementById("star");
  const favCitySelect = document.getElementById("favoriteCity");
  if (!starCheck || !favCitySelect) return;

  // Get saved cities from localStorage
  const savedCitiesJSON = localStorage.getItem("favoriteCities");
  const savedCities = savedCitiesJSON ? JSON.parse(savedCitiesJSON) : [];

  const city = state.cityName;

  if (starCheck.checked) {
    // Add city to favorites if not already there
    if (!savedCities.includes(city)) {
      savedCities.push(city);
      const option = new Option(city, city);
      favCitySelect.add(option);
    }
  } else {
    // Remove city from favorites
    const cityIndex = savedCities.indexOf(city);
    if (cityIndex !== -1) {
      savedCities.splice(cityIndex, 1);
      // Remove option from dropdown
      [...favCitySelect.options].forEach((option) => {
        if (option.value === city) option.remove();
      });
    }
  }

  // Save updated favorites to localStorage
  localStorage.setItem("favoriteCities", JSON.stringify(savedCities));
};
