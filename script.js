var cityWeatherButton = document.getElementById('searchButton');
// var textBox = document.getElementById('citySearch');
var cityList = document.getElementById('cities');

cityWeatherButton.addEventListener('click', function() {
    textInfo = document.getElementById('citySearch').value
    requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${textInfo}&appid=c6a435067a34d7baa1c0f2557358b1ff&units=imperial`;

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

    // Pulling our specific data for each detail needed
    var temp = weatherData.main.temp + '\u00b0 F'
    var wind = weatherData.wind.speed + ' MPH'
    var humid = weatherData.main.humidity + '%'

    
    var tempInfo = document.querySelector('#degrees')
    var windInfo = document.querySelector('#miles')
    var humidInfo = document.querySelector('#percent')

    // Displaying the information in the browser 
    tempInfo.innerHTML = temp
    windInfo.innerHTML = wind
    humidInfo.innerHTML = humid

    for (var i=0; i < weatherData; i++) {
      var savedCities = document.createElement(li);
      savedCities.textContent = weatherData[i].name;
      cityList.appendChild(savedCities);   
    }
  });
})

// function newCity() {
//   textBox.value
//   var requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${textBox.value}&appid=c6a435067a34d7baa1c0f2557358b1ff&units=imperial`
//   return requestURL  
// }

// cityWeatherButton.addEventListener('click', getApi);