import {getFormattedWeather} from "./weatherdata.js";

function displayWeather(data){
    const header = document.querySelector('.header > h1')
    header.textContent = data.country

    const subHeader = document.querySelector('.header > h2')
    subHeader.textContent = data.city

    const temp = document.querySelector('.temp')
    temp.textContent = data.tempC // todo c/f temp based

    const tempDetails = document.querySelector('.temp-details')
    const condition = document.createElement('p')
    condition.textContent = data.condition
    const feelsLike = document.createElement('p')
    feelsLike.textContent = `Feels like ${data.feelsC}` // todo c/f temp based
    const humidity = document.createElement('p')
    humidity.textContent = `Humidity ${data.humidity}`

    tempDetails.replaceChildren(condition, feelsLike, humidity)
}

const citySearch = document.querySelector('form')
citySearch.addEventListener('submit', e => {
    e.preventDefault()
    const query = document.querySelector('#query').value
    getFormattedWeather(query)
        .then(weather => {
            displayWeather(weather)
            queryFeedback(false)
        })
        .catch(err => {
            console.log(err)
            queryFeedback(true)
        })
})

function queryFeedback(bool){
    if (bool){
        citySearch.className = 'bad-query'
    } else {
        citySearch.className = ''
    }
}

const akl = getFormattedWeather('auckland').then(weather => displayWeather(weather)).catch(err => console.log(err))
