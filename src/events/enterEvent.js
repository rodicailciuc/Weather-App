import dom from '../dom.js';
import createWeatherHandler from '../handlers/createWeatherHandler.js';

const enterEvent = () => {
    dom.input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            createWeatherHandler();
        }
    });
};

export default enterEvent;
