import Card from './Card'
import CurrentWeathere from './CurrentWeather'
import DayForecast from './DayForecast'
import styles from '../styles/Cards.module.css'

function Cards ({cities, onClose, daysForecast, hourlyWeather}) {
  return (
    <>
      <div className={styles.containerCards}>
        {cities?.map(city => (
            <CurrentWeathere
              key={city.id}
              name={city.name}
              temp={city.temp}
              min={city.min}
              max={city.max}
              img={city.img}
              sys={city.sys}
              weather={city.weather}
              // dayData = {getDay(city.dt, city.timezone)}
              dayData = {city.dayData}
              feels_like={city.feels_like}
              pressure = {city.pressure}
              humidity = {city.humidity}
              sunrise = {city.sunrise}
              sunset = {city.sunset}
              // sunrise = {getTime(city.sunrise, city.timezone)}
              // sunset = {getTime(city.sunset, city.timezone )}
              visibility = {city.visibility}
              daysForecast={daysForecast}
              hourlyWeather = {hourlyWeather}
              onClose={() => onClose(city.id)}
            />
          ))}
    {/* {daysForecast.length > 0 ? <DayForecast daysForecast={daysForecast}/> : undefined} */}
      </div>
    </>
  )
}

export default Cards