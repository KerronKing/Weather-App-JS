import page from './dom.js'
const external = (() => {
  const open = async (city, country) => {
    const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const appID = '6afc4c4d6d160273a7559007309c6525';
    const response = await fetch(`${apiCall}${city},${country}&APPID=${appID}`, { mode: 'cors' });
    const weatherData = await response.json();
    page.render(weatherData);
    console.log(`${weatherData.name}, ${weatherData.main['temp']}, ${weatherData.weather[0].description}`);
  };
  const getWeather = async (city, country) => {
    const internal = await fetch('/src/names.json', { mode: 'cors' });
    const code = await internal.json();
    const cCode = await Object.keys(code).find(key => code[key] === `${country}`).toLowerCase();
    open(city, cCode);
  };
  return { getWeather };
})();
export default external;

