const page = (() => {
  const render = (obj) => {
    const cityLabel = document.getElementById('city-label');
    cityLabel.textContent = `${obj.name}`;
    const conditions = document.getElementById('conditions');
    conditions.textContent = `${obj.main['temp']}`;
    const temperature = document.getElementById('temperature');
    temperature.textContent = `${obj.weather[0].description}`;

    if (temperature.textContent.includes('overcast')) {
      document.body.id = '';
      document.body.id = 'overcast';
    } else if (temperature.textContent.includes('clear')) {
      document.body.id = '';
      document.body.id = 'sunny';
    } else if (temperature.textContent.includes('rain')) {
      document.body.id = '';
      document.body.id = 'rainy';
    } else if (temperature.textContent.includes('clouds')) {
      document.body.id = '';
      document.body.id = 'clear';
    }
  }
  return { render }
})();
export default page;