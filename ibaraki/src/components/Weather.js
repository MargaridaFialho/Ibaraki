import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '5e0c81674bc0816e1194fd79134645a0';
  const lang = 'pt';

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Montemor-o-Novo,pt&appid=${API_KEY}&lang=${lang}`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  return (
    <>
      {weatherData && (
        <div className='pt-5 white'>
          <p>Este é o tempo em {weatherData.name}:</p>
          <h1 className='display-4'>{Math.round(weatherData.main.temp - 273.15)}°C</h1>
          <div>
            <span>{weatherData.weather[0].description}</span>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" style={{width: '50px', height: '50px'}} />
          </div>
          <div>
            <FontAwesomeIcon icon={faDroplet} /> <span>{weatherData.main.humidity}%</span> <FontAwesomeIcon icon={faWind} /> <span>{weatherData.wind.speed} km/h</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;