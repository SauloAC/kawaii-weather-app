import { pwChecker } from "./data";
import { findPlace } from "./findPlace";
import { getCurrentHour } from "./getCurrentHour";
import { getFiveDaysData } from "./getFiveDaysData";

// get data from API
export const getData = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    pwChecker++;
    if (pwchecker === 1) {
      await findPlace(data);
    } else if (pwChecker === 2) {
      await getCurrentHour(data);
    } else {
      await getFiveDaysData(data);
      pwChecker = 0;
    }
  } catch (error) {
    console.log("Error caching data: ", error);
  }
};
