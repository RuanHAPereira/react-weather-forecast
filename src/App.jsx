import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInfo from './components/WeatherInfo/WeatherInfo.jsx'
import './App.css'
import WeatherInfo5Days from './components/WeatherInfo5Days/WeatherInfo5Days.jsx'

export default function App() {
  const [weather, setWeather] = useState(null)
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity(){

    const city = inputRef.current.value
    const key = "c0d687fa576bd0540ad879d196b14f73"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>Dev Club Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>  

      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
    </div>
  )
}

