function updateInterface(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city");
  let country = document.querySelector("#country");
  country.innerHTML = response.data.country;
  city.innerHTML = response.data.city;
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
