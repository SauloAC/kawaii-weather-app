import { errorCallBack } from "./js/errorCallBack.js";
import { findPlace } from "./js/findPlace.js";
import { initGoogleAutocomplete } from "./js/initGoogleAutocomplete.js";
import { initializeFavorites } from "./js/initializeFavorites.js";
import { successCallBack } from "./js/successCallBack.js";

// Initialize event listeners
initializeFavorites();
findPlace();
await initGoogleAutocomplete();

// Start geolocation to get user's current location
navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
