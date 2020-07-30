import external from './api';
import './styles.css';

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const { city } = data;
  external.getWeather(city);
  form.reset();
});