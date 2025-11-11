import { addOnClickFiveDaysForecast } from "./addOnClickFiveDaysForecast.js";
import { state } from "./data.js";
import { weatherCheck } from "./weatherCheck.js";

// Initialize Google Places Autocomplete on search input
export const initGoogleAutocomplete = () => {
  if (
    typeof window.google === "undefined" ||
    !window.google.maps ||
    !window.google.maps.places
  ) {
    console.log("Waiting for Google Maps API to load...");
    setTimeout(initGoogleAutocomplete, 100);
    return;
  }

  console.log("Google Maps API loaded, initializing autocomplete");
  const input = document.getElementById("sbox1");
  if (!input) {
    console.log("Search input not found");
    return;
  }

  const autocomplete = new window.google.maps.places.Autocomplete(input, {
    types: ["(cities)"],
    fields: ["geometry", "formatted_address", "name", "address_components"],
  });

  // Handle place selection from autocomplete
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();

    console.log("Place selected:", place);

    if (!place.geometry || !place.geometry.location) {
      console.log("No geometry available for:", input.value);
      return;
    }

    // Extract city and country from address components
    let city = "";
    let country = "";

    if (place.address_components) {
      for (const component of place.address_components) {
        if (component.types.includes("locality")) {
          city = component.long_name;
        }
        if (component.types.includes("country")) {
          country = component.long_name;
        }
      }
    }

    // Update state with selected place
    state.lat = place.geometry.location.lat();
    state.lon = place.geometry.location.lng();
    state.cityName =
      city && country ? `${city}, ${country}` : place.formatted_address;
    state.haveCountryName = true;
    state.pwChecker = 0;
    state.pwChecker++;

    console.log("Autocomplete - Updated state:", {
      lat: state.lat,
      lon: state.lon,
      cityName: state.cityName,
      pwChecker: state.pwChecker,
    });

    // Fetch weather data
    weatherCheck();

    setTimeout(() => {
      addOnClickFiveDaysForecast();
    }, 1000);
  });

  console.log("Autocomplete initialized successfully");
};
