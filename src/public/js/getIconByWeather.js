const getIconByWeather = (weatherDescription, image) => {
  switch (weatherDescription) {
    case "clear sky":
      image.src = "./assets/sunny.png";
      break;

    case "few clouds":
      image.src = "./assets/cloudy.png";
      break;

    case "broken clouds":
      image.src = "./assets/cloudy.png";
      break;

    case "scattered clouds":
      image.src = "./assets/cloud.png";
      break;

    case "overcast clouds":
      image.src = "./assets/cloud.png";
      break;

    case "light rain":
      image.src = "./assets/rain.png";
      break;

    case "moderate rain":
      image.src = "./assets/rainy.png";
      break;

    case "heavy rain":
      image.src = "./assets/storm.png";
      break;

    case "light snow":
      image.src = "./assets/snow.png";
      break;

    case "moderate snow":
      image.src = "./assets/snowing.png";
      break;

    case "mist":
      image.src = ".assets/fog.png";
      break;

    case "haze":
      image.src = "./assets/fog.png";
      break;

    default:
      image.src = "./assets/wind.png";
      break;
  }
  console.log();
};

export { getIconByWeather };
