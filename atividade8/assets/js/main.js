document.getElementById('pesquisalocal').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const location = document.getElementById('locationInput').value;
    fetchWeatherData(location);
});

function fetchWeatherData(location) {
    const apiKey = "3238e2b122506c716952325a2bca7564";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível obter os dados meteorológicos');
            }
            return response.json();
        })
        .then(data => {
            const tempCelsius = (data.main.temp - 273.15).toFixed(1);
            const windKMH = (data.wind.speed * 3.6).toFixed(1);
            const updateData = Object.assign ({}, data, {
                main: Object.assign ({}, data.main, {temp: tempCelsius}),
                wind: Object.assign ({}, data.wind, {speed: windKMH})
            });

            updateUI(updateData);
        })
        .catch(error => {
            console.error('Erro ao obter dados meteorológicos:', error)
        });
}

function updateUI(weatherData) {

    document.querySelector('.local').textContent = `Local: ${weatherData.name}`;
    document.querySelector('.temperatura').textContent = `Temperatura: ${weatherData.main.temp}°C`;
    document.querySelector('.clima').textContent = `Clima: ${weatherData.weather[0].description}`;
    document.querySelector('.vento').textContent = `Vento: ${weatherData.wind.speed}  km/h`;
    document.querySelector('.umidade').textContent = `Umidade: ${weatherData.main.humidity}%`;
    document.querySelector('.pais').textContent = `País: ${weatherData.sys.country}`;
}
