document.getElementById('fetch-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }
    
    const apiKey = 'f0406c9763fee09f7f71e120fa9502d7'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API error.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDisplay = document.getElementById('weather-display');
            weatherDisplay.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById('weather-display').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
});