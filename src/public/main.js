import { changeInfo } from "./js/changeInfo.js";
import { errorCallBack } from "./js/errorCallBack.js";
import { findPlace } from "./js/findPlace.js";
import { successCallBack } from "./js/successCallBack.js";

// Initialize event listeners
changeInfo();
findPlace();

// Start geolocation to get user's current location
navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
