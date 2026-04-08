async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");
    const apiKey = "482cb37128e0462b4e2414ea03f52814";

    if (!city){
        result.innerHTML = "❌ Enter city name";
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        result.innerHTML = `
        <h3>${data.name}</h3>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>⛅ Condition: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch(error){
        result.innerHTML = "⚠️ Error fetching data. Check city name or internet.";
        console.error(error);
    }
}