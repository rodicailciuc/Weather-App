const getWeather = () => {
    // container
    const card = document.createElement('div');
    card.classList.add('card');
    // search input
    const search = document.createElement('div');
    search.classList.add('search');

    // input
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('search-input');
    input.placeholder = 'enter city name';
    input.spellcheck = false;
    // button and img
    const button = document.createElement('button');
    button.classList.add('search-button');
    const searchImg = document.createElement('img');
    searchImg.src = './assets/search.png';
    button.appendChild(searchImg);
    search.appendChild(input);
    search.appendChild(button);
    // weather
    const weather = document.createElement('div');
    weather.classList.add('weather');
    // weather img
    const weatherIcon = document.createElement('img');
    weatherIcon.src = './assets/rain.png';
    weatherIcon.classList.add('weather-icon');
    // temperature
    const temp = document.createElement('h1');
    temp.classList.add('temp');
    temp.textContent = '22°C';
    // city
    const city = document.createElement('h2');
    city.classList.add('city');
    city.textContent = 'New York';
    // details
    const details = document.createElement('div');
    details.className = 'details';
    // humidity
    const col1 = document.createElement('div');
    col1.className = 'col';
    const humidityIcon = document.createElement('img');
    humidityIcon.src = './assets/humidity.png';
    const humidityDiv = document.createElement('div');
    const humidity = document.createElement('p');
    humidity.className = 'humidity';
    humidity.textContent = '50%';
    const humidityText = document.createElement('p');
    humidityText.textContent = 'Humidity';
    humidityDiv.appendChild(humidity);
    humidityDiv.appendChild(humidityText);
    col1.appendChild(humidityIcon);
    col1.appendChild(humidityDiv);
    // wind
    const col2 = document.createElement('div');
    col2.className = 'col';
    const windIcon = document.createElement('img');
    windIcon.src = './assets/wind.png';
    const windDiv = document.createElement('div');
    const wind = document.createElement('p');
    wind.className = 'wind';
    wind.textContent = '15 km/h';
    const windText = document.createElement('p');
    windText.textContent = 'Wind Speed';
    windDiv.appendChild(wind);
    windDiv.appendChild(windText);
    col2.appendChild(windIcon);
    col2.appendChild(windDiv);

    details.appendChild(col1);
    details.appendChild(col2);

    weather.appendChild(weatherIcon);
    weather.appendChild(temp);
    weather.appendChild(city);
    weather.appendChild(details);

    card.appendChild(search);
    card.appendChild(weather);
    document.body.appendChild(card);

    return {
        input,
        button,
        weatherIcon,
        temp,
        city,
        humidity,
        wind,
    };
};

export default getWeather;
