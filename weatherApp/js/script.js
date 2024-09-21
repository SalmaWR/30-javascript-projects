const apiKey = "0c875265e82fe0e4aa9b06b98b6af2fa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherContainer = document.querySelector(".weather");
const cityContainer = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const loader = document.querySelector(".loader");



async function getWeather(enterdCity) {

    try {
        const response = await fetch(apiUrl + enterdCity + `&appid=${apiKey}`);

        if (!response.ok) {
            const error = cityContainer;
            error.innerHTML = "Ooops!";

            weatherContainer.style.display = "block";
            weatherIcon.style.display = "none";
            humidity.style.display = "none";
            wind.style.display = "none";
            temp.style.display = "none";
            loader.style.display = "block";
            searchBox.value = "";
            return; 
        }

        const data = await response.json();


        weatherContainer.style.display = "block";
        weatherIcon.style.display = "block";
        humidity.style.display = "block";
        wind.style.display = "block";
        temp.style.display = "block";
        loader.style.display = "none";

        cityContainer.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + ' °C';
        humidity.innerHTML = data.main.humidity + '%';
        wind.innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }

        searchBox.value = "";

    } catch (error) {
        cityContainer.innerHTML = "Error fetching data. Please try again.";
        loader.style.display = "none";
        weatherContainer.style.display = "none";
    }
}


searchBtn.addEventListener("click", () => {
    const enterdCity = searchBox.value.trim();
    getWeather(enterdCity);
});



