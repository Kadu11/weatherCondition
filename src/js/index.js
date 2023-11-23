const apiKey = "11293500f6a04e82b4401549232311";

const searchButton = document.querySelector(".btnSearch");

searchButton.addEventListener('click', async () => {
  const city = document.getElementById("searchInput").value;

  if(!city) return;
  
  const data = await searchCityData(city);

  screenData(data,city);
});

async function searchCityData(city){
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=pt`;
  
  const response = await fetch(apiUrl);

  const data = response.json();

  if(response.status !== 200) return;

  return data;
}

function screenData(data,city){
  const temperature = data.current.temp_c;
  const condition = data.current.condition.text;
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_kph;
  const iconCondition = data.current.condition.icon

  document.getElementById('city').textContent = city;

  document.getElementById('temperature').textContent = `${temperature}ºC`

  document.getElementById("condition").textContent = condition

  document.getElementById("humidity").textContent = `${humidity}%`
  
  document.getElementById("windSpeed").textContent = `${windSpeed}km/h`

  document.getElementById("iconWeather").setAttribute("src", iconCondition )
}