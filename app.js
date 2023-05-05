const form = document.querySelector('#city-form');
const input = document.querySelector('#city-input');
const weatherList = document.querySelector('#weather-list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const city = input.value;
  const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`;

  fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "365513f400msh0de3ef3abbb873dp156379jsn7da9b1744fd1",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const li = document.createElement('li');
    const temp = Math.round(data.main.temp - 273.15);
    const desc = data.weather[0].description;
    const cityName = data.name;
    li.innerHTML = `<span class="city-name">${cityName}</span><span class="temp">${temp}&deg;C</span><span class="desc">${desc}</span>`;
    weatherList.appendChild(li);
  })
  .catch(err => {
    console.error(err);
  });
});
