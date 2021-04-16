const API_key = 'd5aa0f4d46e15cc45b1001c5aa04328f';

const weatherIcon = document.querySelector('.weather_icon'), 
    weatherData = document.querySelector('.weather_data');

const getWeatherData = async (lat, lon) => {
    let location = 'q=Seoul';
    try{
        if (lat === undefined && lon === undefined) {
            location = 'q=Seoul';
            console.log('location: ' + location);
        } else {
            location = `lat=${lat}&lon=${lon}`;
            console.log('location: ' + location);
        }

        let API_url = `https://api.openweathermap.org/data/2.5/weather?${location}&appid=${API_key}`;
        console.log('API_url ' + API_url);
        console.log('location ' + location);
        const data = await fetch(API_url);
        const weatherData = await data.json();
        const ABS_ZERO = 273.15; 
    
        const weather = {
            temp: (weatherData.main.temp - ABS_ZERO).toFixed(1), 
            maxTemp: (weatherData.main.temp_max - ABS_ZERO).toFixed(1), 
            minTemp: (weatherData.main.temp_min - ABS_ZERO).toFixed(1), 
            humidity: weatherData.main.humidity,
            rain: weatherData.rain ? weatherData.rain["1h"] : null,
            wind: weatherData.wind['speed'],
            icon: weatherData.weather[0].icon
        }
        addWeather(weather);
    } catch{
        console.log('FALED TO GET DATA');
    };
}

const addWeather = (weather) => {
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="icon" />`;
    weatherData.innerHTML = `온도: ${weather.temp} °C<br>`;
    weatherData.innerHTML += `최고 온도: ${weather.maxTemp} °C<br>`;
    weatherData.innerHTML += `최저 온도: ${weather.minTemp} °C<br>`;
    weatherData.innerHTML += `습도: ${weather.humidity} %<br>바람: ${weather.wind}km/hr<br>`;
    if (weather.rain) {
        weatherData.innerHTML += `강수량: ${weather.rain}mm/h %`;
    }
}

const success = (position) => {
    const {lat, lon} = position.coords;
    getWeatherData(lat, lon);
}

const error = (err) => {
    console.log(`ERROR: ${err}`); 
} 

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
};

getLocation();