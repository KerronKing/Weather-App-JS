import form from './form';

const external = (() => {
  const getCountryCode = async () => {
    const internal = await fetch('src/names.json', { mode: 'cors' });
    const code = await internal.json();
    return Object.keys(code).find(key => code[key] === `${form.getInput().country}`).toLowerCase();
  };
  const weatherGen = async () => {
    const city = form.getInput().city;
    const countryCode = getCountryCode();
    const appID = '6afc4c4d6d160273a7559007309c6525';
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city},
      ${countryCode}&APPID=${appID}`, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
  };
  return { weatherGen };
})();
export default external;

