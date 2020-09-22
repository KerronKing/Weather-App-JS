import page from './dom';

const location = (() => {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const success = async (pos) => {
    const appID = '6afc4c4d6d160273a7559007309c6525';
    const url = 'https://api.openweathermap.org/data/2.5/weather?'
    let crd = pos.coords;

    const response = await fetch(`${url}lat=${crd.latitude}&lon=${crd.longitude}&appid=${appID}`, { mode: 'cors' });
    const initialData = await response.json();
    page.render(initialData);
    page.tempChanger(initialData);
  };

  const error = (err) => {
    console.log(err);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return { getCurrentLocation };
})();

export default location;
