import { handleFavoriteCitySelect } from "./handleFavoriteCitySelect.js";
import { loadFavoriteCities } from "./loadFavoriteCities.js";
import { toggleFavoriteStar } from "./toggleFavoriteStar.js";

// Initialize all favorite city functionality
export const initializeFavorites = () => {
  // Load saved cities into dropdown
  loadFavoriteCities();

  // Set up star checkbox event listener
  const starCheck = document.getElementById("star");
  if (starCheck) {
    starCheck.addEventListener("click", toggleFavoriteStar);
  }

  // Set up favorite city dropdown event listener
  const favCitySelect = document.getElementById("favoriteCity");
  if (favCitySelect) {
    favCitySelect.addEventListener("change", handleFavoriteCitySelect);
  }
};
