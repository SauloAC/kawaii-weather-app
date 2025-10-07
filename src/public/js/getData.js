import { state } from "./data.js";
import { findPlace } from "./findPlace.js";
import { getCurrentHour } from "./getCurrentHour.js";
import { getFiveDaysData } from "./getFiveDaysData.js";

// get data from API
export const getData = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    state.pwChecker++;
    if (state.pwChecker === 1) {
      await findPlace(data);
    } else if (state.pwChecker === 2) {
      await getCurrentHour(data);
    } else {
      await getFiveDaysData(data);
      state.pwChecker = 0;
    }
  } catch (error) {
    console.log("Error caching data: ", error);
  }
};
