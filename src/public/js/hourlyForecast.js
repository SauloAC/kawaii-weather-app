import { getIconByWeather } from "./getIconByWeather";

export const hourlyForecast = (data) => {
  for (i = 0; i < 8; i++) {
    document.querySelector(`#hour${i + 1}`).innerHTML = `<h3 id="hour${
      i + 1
    }Time">${data[i].hour}:00</h3><img id="hour${
      i + 1
    }img" src"" alt=""><P id="hour${i + 1}MaxTemp">Max: ${Math.round(
      data[i].temp_max
    )}°C</P><p id="hour${i + 1}MinTemp">Min: ${Math.round(
      data[i].temp_min
    )}°C</p>`;
    getIconByWeather(
      data[i].description,
      document.getElementById(`hour${i + 1}img`)
    );
  }
};
