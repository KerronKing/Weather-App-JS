const page = (() => {
  const render = (obj) => {
    const cityLabel = document.getElementById('city-label');
    cityLabel.textContent = `${obj.name}`;
    const conditions = document.getElementById('conditions');
    conditions.textContent = `${obj.main['temp']}`;
    const temperature = document.getElementById('temperature');
    temperature.textContent = `${obj.weather[0].description}`;
  }
  return { render }
})();
export default page;