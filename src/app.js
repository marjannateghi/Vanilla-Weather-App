function showTemperature(response) {
    console.log(response.data.weather[0].description);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let descriptionElement = document.querySelector("#description");
    descriptionElement = response.data.weather[0].description;
}

let apiKey = "233f4519d2bc22454f1e109671d01c65";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);