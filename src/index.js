import external from './api';
import './styles.css';

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const { city } = data;
  const { country } = data;
  external.getWeather(city, country);
  form.reset();
});