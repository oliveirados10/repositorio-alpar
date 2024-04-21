class ControllerDate {
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


