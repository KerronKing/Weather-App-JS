import page from './dom';

const external = (() => {
  const open = async (city) => {
    const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const appID = '6afc4c4d6d160273a7559007309c6525';
    const response = await fetch(`${apiCall}${city}&APPID=${appID}`, { mode: 'cors' });
    const weatherData = await response.json();
    page.render(weatherData);
    page.tempChanger(weatherData);
  };
  const capitalize = (entry) => {
    const proper = entry.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return proper;
  };
  const getWeather = (city) => {
    const casedCity = capitalize(city);
    open(casedCity);
  };
  return { getWeather };
})();
export default external;