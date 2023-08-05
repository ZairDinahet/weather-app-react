import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Nav from './Nav';
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
        img: cityData.weather[0].icon,
        wind: cityData.wind.speed,
        temp: Math.round(cityData.main.temp),
        name: cityData.name,
        weather: cityData.weather[0].main,
        clouds: cityData.clouds.all,
        latitud: cityData.coord.lat,
        longitud: cityData.coord.lon,
      }
      setCities(oldCity => [...oldCity, city])
    } catch (error) {
      alert("Ciudad no encontrada")
    }
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(city => city.id !== id))
  }
  
  return(
    <>
      <Nav onSearch = {onSearch}/>
      <Cards cities = {cities} onClose = {onClose}/>
    </>
  )
}


export default Home