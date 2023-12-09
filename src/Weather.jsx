import React from 'react'
import { useState } from 'react';
import './weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: "c1e89c76eceaba92e0ae6aacdd402a62",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json()).then(result => {
          setWeather(result);
          setCity('');
          console.log(result)
        })
    }
  }
  const dateshow = (d) => {
    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "September", "october", "november", "december"];
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 12) ? 'app warm' : 'app') : 'appp'}>
      <main>
        <div className="search">
          <input type="text"
            className='searchbar'
            placeholder='search location'
            value={city}
            onChange={e => setCity(e.target.value)}
            onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}

              </div>
              <div className='date'>
                {dateshow(new Date())}
              </div>

            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="type">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : (' ')}

      </main>
    </div>
  )
}

export default Weather
