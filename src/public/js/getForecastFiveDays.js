import { getIconByWeather } from "./getIconByWeather.js";
import { hourlyForecast } from "./hourlyForecast.js";

// display five days forecast
export const getForecastFiveDays = (data) => {
  for (let i = 0; i < 5; i++) {
    document.querySelector(`#day${i + 1}`).innerHTML = `<h3 id="day${
      i + 1
    }Date">${data[i * 8].month} ${data[i * 8].day}</h3><img id="day${
      i + 1
    }img" src="/placeholder.svg" alt="Current Weather Information"><p id="day${
      i + 1
    }Temp">${Math.round(data[i * 8].temp)}°C</p><p id="day${
      i + 1
    }MinTemp">Min: ${Math.round(data[i * 8].temp_min)}°C</p><p id="day${
      i + 1
    }MaxTemp">Max: ${Math.round(data[i * 8].temp_max)}°C</p>`;
    getIconByWeather(
      data[i * 8].description,
      document.getElementById(`day${i + 1}img`)
    );
  }
  hourlyForecast(data);
};
