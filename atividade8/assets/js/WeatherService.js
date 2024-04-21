class WeatherService {
  async fetchWeather(city) {
      const apiKey = "3238e2b122506c716952325a2bca7564";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
              throw new Error('Não foi possível obter os dados meteorológicos');
          }
          const data = await response.json();
          return data;
      } catch (error) {
          throw new Error(`Erro ao obter dados meteorológicos: ${error.message}`);
      }
  }
}
class UIController {
  constructor() {
    this.temperatureElement = document.querySelector('.temperatura');
    this.humidityElement = document.querySelector('.umidade');
    this.windElement = document.querySelector('.vento');
    this.weatherDescriptionElement = document.querySelector('.clima');
  }

  updateUI(weatherData) {
    const tempCelsius = (weatherData.main.temp - 273.15).toFixed(1);
    this.temperatureElement.textContent = `Temperatura: ${tempCelsius} °C`;
    this.humidityElement.textContent = `Umidade: ${weatherData.humidity} %`;
    this.windElement.textContent = `Vento: ${weatherData.windSpeed} m/s`;
    this.weatherDescriptionElement.textContent = `Clima: ${weatherData.weatherDescription}`;
  }

  async fetchWeatherController(city) {
    try {
      const data = await this.weatherService.fetchWeather(city);
      this.updateUI(data);
    } catch (error) {
      prompt('Erro ao obter dados meteorológicos: ', error);
    }
  }
}


class WeatherController {
  constructor(weatherService, uiController) { 
      this.weatherService = weatherService;
      this.uiController = uiController; 
  }

  async fetchWeatherData(city) {
      try {
          const data = await this.weatherService.fetchWeather(city);

          this.uiController.updateUI(data);
      } catch (error) {
          prompt('Erro ao obter dados meteorológicos: ', error);
      }
  }
}

const weatherService = new WeatherService();
const uiController = new UIController();
const weatherController = new WeatherController(weatherService, uiController);


document.getElementById('pesquisalocal').addEventListener('submit', function(event) {
  event.preventDefault();

  const location = document.getElementById('locationInput').value;
  weatherController.fetchWeatherData(location);
});