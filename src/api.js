const external = (() => {
  const open = async (city, country) => {
    const appID = '6afc4c4d6d160273a7559007309c6525';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appID}`, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
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

