// Selectors
const inputBox = document.getElementById("input-box");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherImg = document.getElementById("weather-img");
const searchBtn = document.getElementById("search-btn");
const weather = document.getElementById("row");

const API_KEY = "9d38aebb26e0bd22a6cd109a75d78a42";

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

searchBtn.addEventListener("click", () => {
  getWeather(inputBox.value);
});

let getWeather = async (city) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  let data = await response.json();
  console.log(data)
  showWeather(data);
  
};

const showWeather = (Data) => {
  city.innerText = Data.name;
  temp.innerText = `${Math.round(Data.main.temp)} °C`;
  condition.innerHTML = Data.weather[0].main;
  humidity.innerHTML = ` ${Data.main.humidity} %`;
  wind.innerHTML = `${Data.wind.speed} Km/H`;

  if (Data.weather[0].main == "Clouds") {
    weatherImg.src = "images/clouds.png";
  } else if (Data.weather[0].main == "Rain") {
    weatherImg.src = "images/rain.png";
  } else if (Data.weather[0].main == "Snow") {
    weatherImg.src = "images/snow.png";
  } else if (Data.weather[0].main == "Mist") {
    weatherImg.src = "images/mist.png";
  } else if (Data.weather[0].main == "Clear") {
    weatherImg.src = "images/clear.png";
  } else if (Data.weather[0].main == "Haze") {
    weatherImg.src = "images/haze.png";
  }
};

//init call
getWeather("Hyderabad");
