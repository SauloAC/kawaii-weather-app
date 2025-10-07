// Handle favorite city selection
export const changeInfo = () => {
  const favoriteSelect = document.getElementById("favoriteCity");

  if (!favoriteSelect) return;

  favoriteSelect.addEventListener("change", (e) => {
    const selectedCity = e.target.value;
    if (selectedCity && selectedCity !== "city") {
      document.getElementById("sbox1").value = selectedCity;
      document.getElementById("sbtn1").click();
    }
  });
};
