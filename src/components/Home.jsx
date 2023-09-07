import React, { useEffect, useState } from 'react';
import { searchCity } from '../queries/apiWeather'
import { weatherByHours } from '../queries/apiWeather';
import { alertSweet } from '../queries/utils'
import Card from './Card';
import Header from './Header';

function Home () {
  const [town, setTown] = useState([])
  const [hourlyWeather, sethourlyWeather] = useState([])
  const [daysForecast, setdaysForecast] = useState([])
  
  async function onSearch(city) {
    let currentTown = town;
    let currentHourlyWeather = hourlyWeather;
    let currentDaysForecast = daysForecast;
    setTown([])

    try {
      const cityData = await searchCity(city);
      if (cityData !== null) {
        const cityDataTime = await weatherByHours(cityData.lat, cityData.lon);
  
        setTown(cityData);
        setdaysForecast(cityDataTime[0]);
        sethourlyWeather(cityDataTime[1]);
      }
    } catch (error) {
      alertSweet()
      .then(response => {
        if(response.isConfirmed){
          setTown(currentTown)
          sethourlyWeather(currentHourlyWeather)
          setdaysForecast(currentDaysForecast)
          return
        }
        }
      )
    }
  }

  useEffect(() => {
    const defaultCity = 'Buenos Aires';
    onSearch(defaultCity);
  }, []);

  return(
    <>
      <Header onSearch = {onSearch}/>
      <Card town = {town} daysForecast={daysForecast} hourlyWeather={hourlyWeather}/>
    </>
  )
}


export default Home