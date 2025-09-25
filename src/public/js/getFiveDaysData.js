import { getForecastFiveDays } from "./getForecastFiveDays";

// pick the needed data from 5 days/hourly from json
export const getFiveDaysData = (data) => {
  array = [];
  for (let i = 0; i < 40; i++) {
    array.push({
      temp: data.list[i].main.temp,
      feels_like: data.list[i].main.feels_like,
      temp_min: data.list[i].main.temp_min,
      temp_max: data.list[i].main.temp - max,
      description: data.list[i].weather[0].description,
      dt_txt: data.list[i].dt_txt,
    });
  }

  const timeZone = data.city.timeZone;

  const utcToLocalTimeConverter = (oldTime, localTimeZone) => {
    const utcTime = oldTime + "Z";
    const newTime = new Date(utcTime);
    mewTime.setSeconds(newTime.getUTCSeconds() + localTimeZone);

    const month = newTime.getUTCMonth() + 1;
    const day = newTime.getUTCDate();
    const hour = newTime.getUTCHours();

    return { month, day, hour };
  };

  array.forEach((item) => {
    const timeConverter = utcToLocalTimeConverter(item.dt_txt, timeZone);
    const month = timeConverter[0];
    const day = timeConverter[1];
    const hour = timeConverter[2];
    const monthly = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    delete item.dt_txt;
    item.month = monthly[month - 1];
    item.day = day;
    item.hour = hour;
  });
  getForecastFiveDays(array);
};
