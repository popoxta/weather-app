export {getFormattedWeather}

const API_KEY = '0d034dfff4894e92825194255232203'
const ENDPOINT = 'https://api.weatherapi.com/v1/current.json'

async function getWeatherData(query){
    return await fetch(`${ENDPOINT}?key=${API_KEY}&q=${query}`,
        {
            mode : 'cors'
        })
        .then(res => {
            if (res.status === 400) throw new Error('Query not found')
            else return res.json()
        })
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

function getFormattedWeather(query){
    return getWeatherData(query).then(data => formatWeatherData(data))
}