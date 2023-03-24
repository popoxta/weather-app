import {getFormattedWeather} from "./weatherdata.js";

let isMetric = false

function displayWeather(data){
    const cityName = document.createElement('h1')
    cityName.textContent = data.city
    const country = document.createElement('h2')
    country.textContent = data.country
    const header = document.querySelector('.header')
    header.replaceChildren(cityName, country)

    const condition = document.createElement('p')
    condition.textContent = data.condition
    const humidity = document.createElement('p')
    humidity.textContent = `Humidity ${data.humidity}`
    const feelsLike = document.createElement('p')
    const tempDetails = document.querySelector('.temp-details')
    tempDetails.replaceChildren(condition, feelsLike, humidity)

    const temp = document.createElement('h3')
    const tempDisplay = document.querySelector('.temp')
    tempDisplay.replaceChildren(temp)

    temp.addEventListener('click', e => {
        isMetric = !isMetric
        setTemperatureUnits()
    })

    setTemperatureUnits()
    function setTemperatureUnits(){
        temp.className = isMetric ? 'unit-c' : 'unit-f'
        temp.textContent = isMetric ? data.tempC : data.tempF
        feelsLike.textContent = `Feels like ${isMetric ? data.feelsC : data.feelsF}`
    }
}

const citySearch = document.querySelector('form')
citySearch.addEventListener('submit', async e => {
    e.preventDefault()
    const query = document.querySelector('#query').value

    try {
        const weather = await getFormattedWeather(query)
        displayWeather(weather)
        showBadQuery(false)
    } catch (err){
        console.log(err)
        showBadQuery(true)
    }
})

function showBadQuery(bool){
    citySearch.className = bool ? 'bad-query' : ''
}

getFormattedWeather('auckland')
    .then(displayWeather)
    .catch(console.log)
