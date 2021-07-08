function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayIndex = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[dayIndex];

    return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#day-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// Challenge 1

// function displayTemp(response) {
//   let cityName = document.querySelector("#city");
//   cityName.innerHTML = response.data.name;

//   let cityTemp = Math.round(response.data.main.temp);
//   let temp = document.querySelector("#temp");
//   temp.innerHTML = `${cityTemp}`;

//   let humidity = response.data.main.humidity;
//   let displayHumidity = document.querySelector("#humidity");
//   displayHumidity.innerHTML = `Humidity: ${humidity}%`;

//   let wind = Math.round(response.data.wind.speed);
//   let displayWind = document.querySelector("#wind");
//   displayWind.innerHTML = `Wind: ${wind} km/h`;

//   let weatherDescription = response.data.weather[0].description;
//   let displayDescription = document.querySelector("#day-description");
//   displayDescription.innerHTML = weatherDescription;
// }
// function retrievePosition(position) {
//   let cityInput = document.querySelector("#city");
//   let city = cityInput.value;
//   let units = "metric";
//   let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
//   axios.get(url).then(displayTemp);
// }

// navigator.geolocation.getCurrentPosition(retrievePosition);

// // challenge bonus
// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

// function searchLocation(position) {
//   let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   let units = "metric";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
//   axios.get(apiUrl).then(displayTemp);
// }

// let locationButton = document.querySelector("#current-button");
// locationButton.addEventListener("click", getCurrentLocation);

// challenge 2
function displayTemp(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temp").innerHTML = Math.round(
        response.data.main.temp
    );

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );
    document.querySelector("#day-description").innerHTML =
        response.data.weather[0].main;
}

function search(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayTemp);
}

function handleSubmit(event) {
    event.preventDefault();
    // let input = document.querySelector("#input-search");
    // let cityName = document.querySelector("h1");
    // cityName.innerHTML = `${input.value}`;
    let city = document.querySelector("#input-search").value;
    search(city);
}

function searchLocation(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayTemp);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let button = document.querySelector("#current-button");
button.addEventListener("click", getCurrentLocation);

search("New York");

// Challenge 3
function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#faren");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);