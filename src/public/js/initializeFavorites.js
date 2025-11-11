import { handleFavoriteCitySelect } from "./handleFavoriteCitySelect.js";
import { loadFavoriteCities } from "./loadFavoriteCities.js";
import { toggleFavoriteStar } from "./toggleFavoriteStar.js";

// Initialize all favorite city functionality
export const initializeFavorites = () => {
  console.log("initializeFavorites called");

  // Load saved cities into dropdown
  loadFavoriteCities();

  // Set up star checkbox event listener
  const starCheck = document.getElementById("star");
  if (starCheck) {
    starCheck.addEventListener("click", toggleFavoriteStar);
    console.log("Star checkbox listener attached");
  } else {
    console.log("Star checkbox not found");
  }

  // Set up favorite city dropdown event listener
  const favCitySelect = document.getElementById("favoriteCity");
  if (favCitySelect) {
    favCitySelect.addEventListener("change", handleFavoriteCitySelect);
    console.log("Favorite city dropdown listener attached");
  } else {
    console.log("Favorite city dropdown not found");
  }
};
