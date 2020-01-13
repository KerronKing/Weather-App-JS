import external from './api.js';
import './styles.css';

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const city = data['city'];
  const country = data['country'];
  external.getWeather(city, country);
  form.reset();
});