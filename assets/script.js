let weather = {
    "apiKey": "a649ac03335b61b88b42edeea070ca64",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon , describtion} = data.weather;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,describtion,temp,humidity,speed);

    }
} 