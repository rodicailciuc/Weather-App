const updateWeather = async (data, elements) => {
    const {
        weatherIcon,
        tempElement,
        cityElement,
        humidityElement,
        windElement,
    } = elements;

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    tempElement.textContent = `${data.main.temp}°C`;
    cityElement.textContent = data.name;
    humidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${data.wind.speed} km/h`;
};
export default updateWeather;
