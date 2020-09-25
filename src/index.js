import external from './api';
import './styles.css';
import location from './location';

const form = document.getElementById('form');

window.onload = location.getCurrentLocation();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const { city } = data;
  external.getWeather(city);
  form.reset();
});