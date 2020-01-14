import page from './dom';

const external = (() => {
  const open = async (city, countryCode, countryName) => {
    const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const appID = '6afc4c4d6d160273a7559007309c6525';
    const response = await fetch(`${apiCall}${city},${countryCode}&APPID=${appID}`, { mode: 'cors' });
    const weatherData = await response.json();
    page.render(weatherData, countryName);
    page.tempChanger(weatherData);
  };
  const capitalize = (entry) => {
    entry.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const getWeather = async (city, country) => {
    const casedCountry = capitalize(country);
    const casedCity = capitalize(city);
    const internal = await fetch('/src/names.json', { mode: 'cors' });
    const code = await internal.json();
    const cCode = await Object.keys(code).find(key => code[key] === `${casedCountry}`).toLowerCase();
    open(casedCity, cCode, casedCountry);
  };
  return { getWeather };
})();
export default external;