import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Header from './Header';
import { searchCity } from '../queries/apiWeather'
import { weatherByHours } from '../queries/apiWeather'
import Footer from './Footer';
import CurrentWeather from './CurrentWeather';
import DayForecast from './DayForecast';
import axios from 'axios';

// const apiKey = "ff86fa97f5c03b7d6467658ab38848c1"
const apiKey = "95ec01f8b61f542bd3d75bc4a0bf4394"

function Home () {
  const [cities, setCities] = useState([])
  const [hourlyWeather, sethourlyWeather] = useState([])
  const [daysForecast, setdaysForecast] = useState([])

  // async function weatherByHours(lat, lon) {
  //   try {
  //     let jsonWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
  //     let dataWeather = jsonWeather.data;

  //     let dataHours = dataWeather.list.slice(0, 8).map((day) => {
  //       return {
  //         id: day.dt,
  //         temp: Math.round(day.main.temp),
  //         img: day.weather[0].icon,
  //         hour: getHours(day.dt, dataWeather.city.timezone),
  //       }
  //     })


  //     let [, , ,day1, , , , , , , ,day2, , , , , , , ,day3, , , , , , , ,day4, , , , , , , ,day5] = dataWeather.list
  //     let dataDays = [day1, day2, day3, day4, day5].map((day) => {
  //       return {
  //         id: day.dt,
  //         temp: Math.round(day.main.temp),
  //         min: Math.round(day.main.temp_min),
  //         max: Math.round(day.main.temp_max),
  //         img: day.weather[0].icon,
  //         day: getDay(day.dt, dataWeather.city.timezone),
  //       }
  //     })


  //     console.log(dataDays);
  //     console.log(dataHours);
  //     setdaysForecast(dataDays)
  //     sethourlyWeather(dataHours)
  //   } catch (error) {
  //     alert("Ciudad no encontrada")
  //   }
  // }

  // async function onSearch(ciudad){
  //   try {
  //     let jsonCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
  //     let cityData = jsonCity.data

  //     const city = {
  //       id: cityData.id,
  //       min: Math.round(cityData.main.temp_min),
  //       max: Math.round(cityData.main.temp_max),
  //       feels_like: Math.round(cityData.main.feels_like),
  //       pressure: cityData.main.pressure,
  //       humidity: cityData.main.humidity,
  //       img: cityData.weather[0].icon,
  //       wind: cityData.wind.speed,
  //       temp: Math.round(cityData.main.temp),
  //       name: cityData.name,
  //       weather: cityData.weather[0].description,
  //       clouds: cityData.clouds.all,
  //       visibility: cityData.visibility,
  //       latitud: cityData.coord.lat,
  //       longitud: cityData.coord.lon,
  //       sys: cityData.sys.country,
  //       dt: cityData.dt,
  //       timezone: cityData.timezone,
  //       sunrise: cityData.sys.sunrise,
  //       sunset: cityData.sys.sunset

  //     }
  //     setCities(oldCity => [...oldCity, city])
  //     weatherByHours(city.latitud, city.longitud)
  //     setCities([city])
  //   } catch (error) {
  //     alert("Ciudad no encontrada")
  //   }
  // }

  // function onClose(id){
  //   setCities(oldCities => oldCities.filter(city => city.id !== id))
  // }

  // const weekDayNames = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday"
  // ]
  
  // const monthNames = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec"
  // ]
  
  // function getDay (dateUnix, timezone) {
  //   const date = new Date((dateUnix + timezone) * 1000);
  //   const weekDayName = weekDayNames[date.getUTCDay()];
  //   const monthName = monthNames[date.getUTCMonth()]
    
  //   return `${weekDayName} ${date.getUTCDate()}, ${monthName}`
  // }
  

  // function getTime(timeUnix, timezone){
  //   const date = new Date((timeUnix + timezone) * 1000);
  //   const hours = date.getUTCHours();
  //   const minutes = date.getUTCMinutes();
  //   const period = hours >= 12 ? "PM" : "AM";
    
  //   return `${hours % 12||12}:${minutes} ${period}`
  // }
  
  // function getHours(timeUnix, timezone){
  //   const date = new Date((timeUnix + timezone * 3600) * 1000);
  //   const hours = date.getUTCHours();
  //   const period = hours >= 12 ? "PM" : "AM";
    
  //   return `${hours % 12||12} ${period}`
  // }

  async function onSearch(city) {
    try {
      const cityData = await searchCity(city);
      if (cityData !== null) { // Comprueba si cityData no es null
        const cityDataTime = await weatherByHours(cityData.lat, cityData.lon);
  
        setCities([cityData]);
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
      <main>
      <Cards cities = {cities} daysForecast={daysForecast} hourlyWeather={hourlyWeather}/>
      {/* <CurrentWeather/> */}
      
      </main>
      {/* <Footer /> */}
    </>
  )
}


export default Home