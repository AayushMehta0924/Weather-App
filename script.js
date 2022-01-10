let weather = {
    "apiKey": "7c69856704510a9bfd63c6b6d234d106",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=7c69856704510a9bfd63c6b6d234d106"
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
};