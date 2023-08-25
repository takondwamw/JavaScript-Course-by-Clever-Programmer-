/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const url = 'https://forecast9.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af0be7b468msh6b9cd455c94f7abp18be37jsn36f4d709aabb',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = () => {
  headers = {

  }
  //HINT: Use template literals to create a url with input and an API key
  const weather = async () => {
  
     try {
      let response = await fetch(url,options);
      let data = await response.json();
      return data;
     } catch (error) {
      return console.log(error);
     }

  }

  //CODE GOES HERE
  return weather().then( data => console.log(data));
}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData();

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  
}

