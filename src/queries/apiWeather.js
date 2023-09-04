import axios from "axios"
import { getDay }from "./utils"
import { getTime }from "./utils"
import { getHours } from "./utils"

// const apiKey = "ff86fa97f5c03b7d6467658ab38848c1"
const apiKey = "95ec01f8b61f542bd3d75bc4a0bf4394"

export async function searchCity(city){
  try {
    let jsonCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    let cityData = jsonCity.data

    cityData = {
      id: cityData.id,
      name: cityData.name,
      min: Math.round(cityData.main.temp_min),
      max: Math.round(cityData.main.temp_max),
      feels_like: Math.round(cityData.main.feels_like),
      pressure: cityData.main.pressure,
      humidity: cityData.main.humidity,
      img: cityData.weather[0].icon,
      wind: cityData.wind.speed,
      temp: Math.round(cityData.main.temp),
      weather: cityData.weather[0].description,
      clouds: cityData.clouds.all,
      visibility: cityData.visibility,
      lat: cityData.coord.lat,
      lon: cityData.coord.lon,
      sys: cityData.sys.country,
      dt: cityData.dt,
      timezone: cityData.timezone,
      sunrise: getTime(cityData.sys.sunrise, cityData.timezone),
      sunset: getTime(cityData.sys.sunset, cityData.timezone),
      dayData: getDay(cityData.dt, cityData.timezone)
    }
    return cityData;
  } catch (error) {
    throw new Error("Ciudad no encontrada");
  }
}



export async function weatherByHours(lat, lon) {
  try {
    let jsonWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    let dataWeather = jsonWeather.data;

    let dataHours = dataWeather.list.slice(0, 7).map((day) => {
      return {
        id: day.dt,
        temp: Math.round(day.main.temp),
        img: day.weather[0].icon,
        hour: getHours(day.dt, dataWeather.city.timezone),
      }
    })



    //Estos e puede hacer con un for o filter
    
    let dataDays = []
    dataWeather.list.forEach(day => {
      if (day.dt_txt.includes("12:00:00") && dataDays.length < 5 ) {
        dataDays.push({
          id: day.dt,
          temp: Math.round(day.main.temp),
          min: Math.round(day.main.temp_min),
          max: Math.round(day.main.temp_max),
          img: day.weather[0].icon,
          day: getDay(day.dt, dataWeather.city.timezone),
        })
      }
    })

    console.log(dataDays);
    console.log(dataHours);
    return [dataDays, dataHours]
  } catch (error) {
    throw new Error("Ciudad no encontrada");
  }
}