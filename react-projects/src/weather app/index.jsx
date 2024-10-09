import React, { useState, useEffect } from "react";
import "./index.css"
export default function WeatherUpdate() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchWeather(search) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9cac8a2de387444ddb1b5925907adc72`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
 async function handleSearch() {
     await fetchWeather(search);
  }
  useEffect(() => {
    fetchWeather("dhaka");
  }, []);
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  function handleKeypress(e){
    if(e.key==="Enter"){
        handleSearch()
  
    }
  }

  return (
    <div className="weather-update-container">
      <div className="search-bar">
        <input
          type="text"
          className="input-bar"
          placeholder="Location"
          value={search}

          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeypress}
        />
        <button className="search-button"onClick={() => handleSearch()}>Search</button>
      </div>
{
    weatherData? 
    loading ? (
      <div>Your data is Loading</div>
    ) : (
      <div className="weather-info">
        <div className="city-name">
          <h3>
            {weatherData?.name} , <span>{weatherData?.sys?.country}</span>
          </h3>
        </div>
        <div className="date">
          <span className="currentDate">{getCurrentDate()}</span>
        </div>
        <div className="temp">{Math.round(weatherData?.main?.temp-273.15)} C°</div>
        <div  className="weather-info">
        <p className="description">{weatherData && weatherData.weather[0] && weatherData.weather[0].description ?
            weatherData.weather[0].description : "No description available"    
     || "No description available"}
    </p>       
            </div>
        <div className="weather-info">
          <div>
            <p class="bottom">{weatherData?.wind?.speed}</p>
            <p class="bottom-title">Wind Speed</p>
          </div>
        </div>
        <div className="weather-info">
          <div>
            <p class="bottom">{weatherData?.main?.humidity}%</p>
            <p class="bottom-title">Humidity</p>
          </div>
        </div>
      </div>
    ) : 
    <div>No City Found</div>
}
    </div>
  );
}
