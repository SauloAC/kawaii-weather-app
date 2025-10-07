import { state } from "./data.js";
import { hourlyForecast } from "./hourlyForecast.js";

export const addOnClickFiveDaysForecast = () => {
  const days = document.getElementsByClassName("fiveDays")[0].children;
  console.log(days);
  for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", () => {
      const date = new Date(days[i].children[0].innerHTML);
      console.log(date);
      const arrayFiltered = state.forecastData.filter(
        (item) => item.day === date.getDate()
      );

      if (arrayFiltered.length < 8) {
        const dateNextDay = new Date(days[1].children[0].innerHTML);
        const newArrayFiltered = state.forecastData.filter(
          (item) => item.day === dateNextDay.getDate()
        );
        const maxLength = 8 - arrayFiltered.length;
        for (let i = 0; i < maxLength; i++) {
          arrayFiltered.push(newArrayFiltered[i]);
        }
      }
      hourlyForecast(arrayFiltered);
    });
  }
};
