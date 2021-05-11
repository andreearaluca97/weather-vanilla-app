function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

let apiKey = "d4344c6ea95063be2031ed54ff742e0b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric`;
let units = console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
