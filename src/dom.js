const page = (() => {
  const render = (obj) => {
    const cityLabel = document.getElementById('city-label');
    cityLabel.textContent = `${obj.name}`;
    const temperature = document.getElementById('temperature');
    const celTemp = Math.ceil(obj.main.temp - 273);
    temperature.textContent = `${celTemp} deg C`;
    const conditions = document.getElementById('conditions');
    conditions.textContent = `${obj.weather[0].description}`;
    if (conditions.textContent.includes('overcast')) {
      document.body.id = '';
      document.body.id = 'overcast';
    } else if (conditions.textContent.includes('clear')) {
      document.body.id = '';
      document.body.id = 'sunny';
    } else if (conditions.textContent.includes('rain')) {
      document.body.id = '';
      document.body.id = 'rainy';
    } else if (conditions.textContent.includes('clouds')) {
      document.body.id = '';
      document.body.id = 'clear';
    }
    const wind = document.getElementById('wind-speed');
    wind.textContent = `Wind speed: ${obj.wind.speed}`;
  };
  const tempChanger = (obj) => {
    const temp = document.getElementById('temp');
    const temperature = document.getElementById('temperature');
    const label = document.getElementById('temp-label');
    temp.addEventListener('change', () => {
      if (temp.checked) {
        label.textContent = '';
        label.textContent = 'To Celcius:';
        temperature.textContent = '';
        const fhrTemp = Math.ceil((obj.main.temp - 273) * (9 / 5) + 32);
        temperature.textContent = `${fhrTemp} deg F`;
      } else {
        label.textContent = '';
        label.textContent = 'To Fahrenheit:';
        temperature.textContent = '';
        const celTemp = Math.ceil(obj.main.temp - 273);
        temperature.textContent = `${celTemp} deg C`;
      }
    });
  };
  return { render, tempChanger };
})();
export default page;