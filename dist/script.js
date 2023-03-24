/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weatherdata.js":
/*!****************************!*\
  !*** ./src/weatherdata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormattedWeather": () => (/* binding */ getFormattedWeather)
/* harmony export */ });


const API_KEY = '0d034dfff4894e92825194255232203'
const ENDPOINT = 'https://api.weatherapi.com/v1/current.json'

async function getWeatherData(query) {
    const res = await fetch(`${ENDPOINT}?key=${API_KEY}&q=${query}`,
        {
            mode: 'cors'
        })
    if (res.status === 400) throw new Error('Query not found')
    else return res.json()
}

function formatWeatherData(data) {
    return {
        country: data.location.country,
        city: data.location.name,
        condition: data.current.condition.text,
        tempC: Math.floor(data.current.temp_c),
        feelsC: Math.floor(data.current.feelslike_c),
        tempF: Math.floor(data.current.temp_f),
        feelsF: Math.floor(data.current.feelslike_f),
        humidity: data.current.humidity
    }
}

function getFormattedWeather(query) {
    return getWeatherData(query).then(formatWeatherData)
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherdata.js */ "./src/weatherdata.js");


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
        const weather = await (0,_weatherdata_js__WEBPACK_IMPORTED_MODULE_0__.getFormattedWeather)(query)
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

(0,_weatherdata_js__WEBPACK_IMPORTED_MODULE_0__.getFormattedWeather)('auckland')
    .then(displayWeather)
    .catch(console.log)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUyxPQUFPLFFBQVEsS0FBSyxNQUFNO0FBQ2xFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsY0FBYztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvRUFBbUI7QUFDakQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtQjtBQUNuQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlcmRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtnZXRGb3JtYXR0ZWRXZWF0aGVyfVxyXG5cclxuY29uc3QgQVBJX0tFWSA9ICcwZDAzNGRmZmY0ODk0ZTkyODI1MTk0MjU1MjMyMjAzJ1xyXG5jb25zdCBFTkRQT0lOVCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24nXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShxdWVyeSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RU5EUE9JTlR9P2tleT0ke0FQSV9LRVl9JnE9JHtxdWVyeX1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnXHJcbiAgICAgICAgfSlcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDApIHRocm93IG5ldyBFcnJvcignUXVlcnkgbm90IGZvdW5kJylcclxuICAgIGVsc2UgcmV0dXJuIHJlcy5qc29uKClcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0V2VhdGhlckRhdGEoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnksXHJcbiAgICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRlbXBDOiBNYXRoLmZsb29yKGRhdGEuY3VycmVudC50ZW1wX2MpLFxyXG4gICAgICAgIGZlZWxzQzogTWF0aC5mbG9vcihkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MpLFxyXG4gICAgICAgIHRlbXBGOiBNYXRoLmZsb29yKGRhdGEuY3VycmVudC50ZW1wX2YpLFxyXG4gICAgICAgIGZlZWxzRjogTWF0aC5mbG9vcihkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YpLFxyXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkV2VhdGhlcihxdWVyeSkge1xyXG4gICAgcmV0dXJuIGdldFdlYXRoZXJEYXRhKHF1ZXJ5KS50aGVuKGZvcm1hdFdlYXRoZXJEYXRhKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtnZXRGb3JtYXR0ZWRXZWF0aGVyfSBmcm9tIFwiLi93ZWF0aGVyZGF0YS5qc1wiO1xyXG5cclxubGV0IGlzTWV0cmljID0gZmFsc2VcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKGRhdGEpe1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eVxyXG4gICAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSBkYXRhLmNvdW50cnlcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKVxyXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihjaXR5TmFtZSwgY291bnRyeSlcclxuXHJcbiAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuY29uZGl0aW9uXHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHkgJHtkYXRhLmh1bWlkaXR5fWBcclxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgdGVtcERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kZXRhaWxzJylcclxuICAgIHRlbXBEZXRhaWxzLnJlcGxhY2VDaGlsZHJlbihjb25kaXRpb24sIGZlZWxzTGlrZSwgaHVtaWRpdHkpXHJcblxyXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgIGNvbnN0IHRlbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKVxyXG4gICAgdGVtcERpc3BsYXkucmVwbGFjZUNoaWxkcmVuKHRlbXApXHJcblxyXG4gICAgdGVtcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGlzTWV0cmljID0gIWlzTWV0cmljXHJcbiAgICAgICAgc2V0VGVtcGVyYXR1cmVVbml0cygpXHJcbiAgICB9KVxyXG5cclxuICAgIHNldFRlbXBlcmF0dXJlVW5pdHMoKVxyXG4gICAgZnVuY3Rpb24gc2V0VGVtcGVyYXR1cmVVbml0cygpe1xyXG4gICAgICAgIHRlbXAuY2xhc3NOYW1lID0gaXNNZXRyaWMgPyAndW5pdC1jJyA6ICd1bml0LWYnXHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGlzTWV0cmljID8gZGF0YS50ZW1wQyA6IGRhdGEudGVtcEZcclxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2lzTWV0cmljID8gZGF0YS5mZWVsc0MgOiBkYXRhLmZlZWxzRn1gXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNpdHlTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcclxuY2l0eVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVlcnknKS52YWx1ZVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldEZvcm1hdHRlZFdlYXRoZXIocXVlcnkpXHJcbiAgICAgICAgZGlzcGxheVdlYXRoZXIod2VhdGhlcilcclxuICAgICAgICBzaG93QmFkUXVlcnkoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBzaG93QmFkUXVlcnkodHJ1ZSlcclxuICAgIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIHNob3dCYWRRdWVyeShib29sKXtcclxuICAgIGNpdHlTZWFyY2guY2xhc3NOYW1lID0gYm9vbCA/ICdiYWQtcXVlcnknIDogJydcclxufVxyXG5cclxuZ2V0Rm9ybWF0dGVkV2VhdGhlcignYXVja2xhbmQnKVxyXG4gICAgLnRoZW4oZGlzcGxheVdlYXRoZXIpXHJcbiAgICAuY2F0Y2goY29uc29sZS5sb2cpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==