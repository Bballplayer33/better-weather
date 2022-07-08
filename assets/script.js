let weather = {
    "apiKey": "a649ac03335b61b88b42edeea070ca64",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=a649ac03335b61b88b42edeea070ca64"
            ).then((response) => response.json())
            .then((data) => console.log(data));
    },
} 