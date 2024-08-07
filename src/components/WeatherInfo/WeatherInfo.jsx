/* eslint-disable react/prop-types */
import './WeatherInfo.css'

export default function WeatherInfo({ weather }) {

    console.log(weather);

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>

            <div className='weather-info'>
                <img 
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
                    alt="Weather icon"
                />
                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>

            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    );
}
