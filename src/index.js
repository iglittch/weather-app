function updateInterface(response) {
  let temperature = document.querySelector("#temperature");
  let city = document.querySelector("#city");
  let country = document.querySelector("#country");
  let weatherCondition = document.querySelector("#weather-condition");
  let weatherIcon = document.querySelector("#weather-icon");
  let icon = `<img
              class="weather-icon"
              src=${response.data.condition.icon_url}
              alt="weather-icon"
            />`;
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let time = document.querySelector("#time");
  let currentDate = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);

  currentDate.innerHTML = formatDate(date);
  time.innerHTML = formatTime(date);
  windSpeed.innerHTML = response.data.wind.speed;
  humidity.innerHTML = response.data.temperature.humidity;
  temperature.innerHTML = Math.round(response.data.temperature.current);
  country.innerHTML = response.data.country;
  city.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  weatherIcon.innerHTML = icon;
  console.log(response.data);
}

function formatTime(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${minutes}`;
}

function formatDate(date) {
  let currentDate = date.getDate();
  let year = date.getFullYear();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
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
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  return `${day}, ${currentDate} ${month} ${year}`;
}

function citySearch(city) {
  let apiKey = "9984bb0t812a11f3bb79o019ab7e5b3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=$${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateInterface);
}

function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  citySearch(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", updateCity);
