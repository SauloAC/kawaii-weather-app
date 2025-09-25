import { hourlyForecast } from "./hourlyForecast";

export const addOnClickFiveDaysForecast = () => {
  let days = document.getElementsByClassName("fiveDays")[0].children;
  console.log(days);
  for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", function () {
      let date = new Date(days[i].children[0].innerHTML);
      console.log(date);
      let arrayFiltered = array.filter((item) => item.day === date.getDate());

      if (arrayFiltered.length < 8) {
        let dateNextDay = new Date(day[1].children[0].innerHTML);
        let newArrayFiltered = array.filter(
          (item) => item.day === dateNextDay.getDate()
        );
        let maxLength = 8 - arrayFiltered.length;
        for (let i = 0; i < maxLength; i++) {
          arrayFiltered.push(newArrayFiltered[i]);
        }
      }
      hourlyForecast(arrayFiltered);
    });
  }
};
