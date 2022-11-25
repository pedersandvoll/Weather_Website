let weatherApiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.97&lon=5.73'

async function fetchWeather() {
    const response = await fetch(weatherApiUrl);
    console.log(response)
    return await response.json();
}
fetchWeather().then((weatherArray) => {
    console.log(weatherArray)
    function getCardinalDirection(angle) {
        const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
        return directions[Math.round(angle / 45) % 8]
    }
        for (let weather of weatherArray.properties.timeseries) {
            let container = document.getElementById("weather")
            let date = new Date(weather.time);
            console.log(date.getUTCMonth())  
        let html = `
        <div class="wrapper">
            <div class="content">
                <h1>${date.getDate()}/${date.getMonth()+1} kl ${date.getHours()}:</h1>
                <img src="Assets/weather_icons/${(weather.data.next_1_hours.summary.symbol_code)}.png"></img>
                <h1>${Math.round(weather.data.instant.details.air_temperature)}°C</h1>
                <h1>${getCardinalDirection(weather.data.instant.details.wind_from_direction)}</h1>
            </div>
        </div>
        `;
        container.insertAdjacentHTML("beforeend", html)
        }
})
var mySky = new Klouds({
    selector: '#myCanvas',
    layerCount: 0.4,
    speed: -1,
    cloudColor1: '#19b2cc',
    cloudColor2: '#ffffff',
    bgColor: '#06680'
})

$('#myCanvas').Klouds({
    layerCount: 0.4,
    speed: -1,
    cloudColor1: '#19b2cc',
    cloudColor2: '#ffffff',
    bgColor: '#06680'
})