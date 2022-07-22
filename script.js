var cityWeatherButton = document.getElementById('searchButton');
var textBox = document.getElementById('citySearch');
var cityList = document.getElementById('cities');

function getApi() {
 var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=c6a435067a34d7baa1c0f2557358b1ff&units=imperial';

 fetch(requestURL)
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (weatherData) {
    console.log(weatherData)
    console.log(weatherData.main.temp)
    console.log(weatherData.wind.speed)
    console.log(weatherData.main.humidity)
    for (var i=0; i < weatherData; i++) {
      var savedCities = document.createElement(li);
      savedCities.textContent = weatherData[i].name;
      cityList.appendChild(savedCities);   
    }
  });
}

cityWeatherButton.addEventListener('click', getApi);
