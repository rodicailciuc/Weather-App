import dom from '../dom.js';
import getWeatherByCity from '../../Apis/getWeatherByCity.js';
import getWeather from '../components/getWeather.js';
import updateWeather from '../components/updateWeather.js';

const { input, button, weatherIcon, temp, city, humidity, wind } = getWeather();
const createWeatherHandler = async () => {
    const cityName = dom.input.value;
    if (!cityName) {
        console.error('Please enter a valid city name.');
        return;
    }

    const data = await getWeatherByCity(cityName);
    if (data) {
        const elements = {
            weatherIcon: dom.weatherIcon,
            tempElement: dom.tempElement,
            cityElement: dom.cityElement,
            humidityElement: dom.humidityElement,
            windElement: dom.windElement,
        };
        getWeather(elements);
        updateWeather(data, elements);
    } else {
        console.log('Could not fetch weather data.');
    }
    dom.input.value = '';
};
export default createWeatherHandler;
