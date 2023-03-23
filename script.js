
const API_KEY = ''
const ENDPOINT = 'https://api.weatherapi.com/v1/current.json'

async function getWeatherData(query){
    const response = await fetch(`${ENDPOINT}?key=${API_KEY}&q=${query}`)
    return response.json()
}

function formatWeatherData(data){
    return {
        country : data.location.country,
        city : data.location.name,
        condition : data.current.condition.text,
        tempC : data.current.temp_c,
        feelsC : data.current.feelslike_c,
        tempF : data.current.temp_f,
        feelsF : data.current.feelslike_f,
        humidity : data.current.humidity
    }
}

const weather = getWeatherData('auckland').then(w => formatWeatherData(w)).then(w=> console.log(w))


