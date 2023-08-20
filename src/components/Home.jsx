import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';
import CurrentWeather from './CurrentWeather';
import DayForecast from './DayForecast';
import axios from 'axios';

// const apiKey = "ff86fa97f5c03b7d6467658ab38848c1"
const apiKey = "95ec01f8b61f542bd3d75bc4a0bf4394"

function Home () {
  const [cities, setCities] = useState([])

  async function onSearch(ciudad){
    try {
      let jsonCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
      let cityData = jsonCity.data

      const city = {
        id: cityData.id,
        min: Math.round(cityData.main.temp_min),
        max: Math.round(cityData.main.temp_max),
        feels_like: Math.round(cityData.main.feels_like),
        pressure: cityData.main.pressure,
        humidity: cityData.main.humidity,
        img: cityData.weather[0].icon,
        wind: cityData.wind.speed,
        temp: Math.round(cityData.main.temp),
        name: cityData.name,
        weather: cityData.weather[0].description,
        clouds: cityData.clouds.all,
        visibility: cityData.visibility,
        latitud: cityData.coord.lat,
        longitud: cityData.coord.lon,
        sys: cityData.sys.country,
        dt: cityData.dt,
        timezone: cityData.timezone,
        sunrise: cityData.sys.sunrise,
        sunset: cityData.sys.sunset

      }
      // setCities(oldCity => [...oldCity, city])
      setCities([city])
    } catch (error) {
      alert("Ciudad no encontrada")
    }
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(city => city.id !== id))
  }

  const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
  
  function getDay (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()]
    
    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`
  }
  

  function getTime(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    
    return `${hours % 12||12}:${minutes} ${period}`
  }
  
  return(
    <>
      <Header onSearch = {onSearch}/>
      <main>
      <Cards cities = {cities} onClose = {onClose} getDay = {getDay} getTime = {getTime}/>
      {/* <CurrentWeather/> */}
      {/* <DayForecast/> */}
      </main>
      {/* <Footer/> */}
    </>
  )
}


export default Home