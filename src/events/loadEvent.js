import dom from '../dom.js';
import createWeatherHandler from '../handlers/createWeatherHandler.js';

const loadEvent = () => {
    dom.button.addEventListener('click', createWeatherHandler);
};
// window.addEventListener('DOMContentLoaded', loadEvent);
export default loadEvent;
