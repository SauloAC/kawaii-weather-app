// Load saved cities from localStorage and populate dropdown
export const loadFavoriteCities = () => {
  const favCitySelect = document.getElementById("favoriteCity");
  if (!favCitySelect) return;

  // Get saved cities from localStorage
  const savedCitiesJSON = localStorage.getItem("favoriteCities");
  const savedCities = savedCitiesJSON ? JSON.parse(savedCitiesJSON) : [];

  // Clear existing options except the first one (placeholder)
  while (favCitySelect.options.length > 1) {
    favCitySelect.remove(1);
  }

  // Add each saved city as an option
  savedCities.forEach((city) => {
    const option = new Option(city, city);
    favCitySelect.add(option);
  });
};
