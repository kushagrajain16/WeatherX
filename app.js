document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const cityInput = document.getElementById('city');
  const weatherContainer = document.getElementById('weather');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    }
  });

  function getWeather(city) {
    const apiKey = '366132cd36msh36e35a00f03a8a8p13eaa3jsn87ee1e8fb6ce';

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle the weather data and update the UI as needed
        updateWeatherUI(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  function updateWeatherUI(data) {
    // Update the UI with weather information
    weatherContainer.innerHTML = `
      <p>Temperature: ${data.main.temp}&deg;C</p>
      <p>Description: ${data.weather[0].description}</p>
      <!-- Add more details as needed -->
    `;
  }
});
