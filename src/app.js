function showTemperature(response) {
    console.log(response.data.main.temp);
}

let apiKey = "233f4519d2bc22454f1e109671d01c65";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);