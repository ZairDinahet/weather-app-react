import React, { useEffect, useState } from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Home.module.css';
import { searchCity } from '../queries/apiWeather'
import { weatherByHours } from '../queries/apiWeather'

function Home () {
  const [town, setTown] = useState([])
  const [hourlyWeather, sethourlyWeather] = useState([])
  const [daysForecast, setdaysForecast] = useState([])
  
  async function onSearch(city) {
    try {
      const cityData = await searchCity(city);
      if (cityData !== null) { // Comprueba si cityData no es null
        const cityDataTime = await weatherByHours(cityData.lat, cityData.lon);
  
        setTown(cityData);
        setdaysForecast(cityDataTime[0]);
        sethourlyWeather(cityDataTime[1]);
      }
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    const defaultCity = 'Buenos Aires'; // Cambia por el nombre de la ciudad por defecto
    onSearch(defaultCity);
  }, []);

  return(
    <>
      <Header onSearch = {onSearch}/>
      <Card town = {town} daysForecast={daysForecast} hourlyWeather={hourlyWeather}/>
      {/* <Footer /> */}
    </>
  )
}


export default Home