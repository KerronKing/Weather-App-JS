const cityLabel = document.getElementById('city-label');
const temperature = document.getElementById('temperature');
const conditions = document.getElementById('conditions');
const wind = document.getElementById('wind-speed');
const temp = document.getElementById('temp');
const label = document.getElementById('temp-label');
const date = document.getElementById('date');
const results = document.getElementById('results-area');

const page = (() => {
  const render = (obj) => {
    cityLabel.textContent = `${obj.name}`;
    const celTemp = Math.ceil(obj.main.temp - 273);
    temperature.textContent = `${celTemp} deg C`;
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

    const currentDate = new Date();
    date.classList.replace('hidden', 'visible');
    results.classList.remove('hidden');
    date.textContent = `${currentDate.toLocaleDateString('de-DE')}`;
    wind.textContent = `Wind speed: ${obj.wind.speed}`;
  };
  const tempChanger = (obj) => {
    temp.addEventListener('change', () => {
      if (temp.checked) {
        label.textContent = '';
        label.textContent = 'To Celcius:';
        temperature.textContent = '';
        const fhrTemp = Math.ceil(((obj.main.temp - 273) * (9 / 5)) + 32);
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