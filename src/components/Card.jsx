import CurrentWeathere from './CurrentWeather'
import DayForecast from './DayForecast'
import TodayHighlights from './TodayHighlights'
import TodayAt from "./TodayAt"
import styles from '../styles/Card.module.css'

function Cards ({town, daysForecast, hourlyWeather}) {
  return (
      <main className={styles.containerCard}>
        {town.id !== undefined ? (
        <>        
          <section className={styles.leftContentCard}>
            <CurrentWeathere
              key={town.id}
              name={town.name}
              temp={town.temp}
              img={town.img}
              sys={town.sys}
              weather={town.weather}
              dayData = {town.dayData}
              daysForecast={daysForecast}
              hourlyWeather = {hourlyWeather}
            />
            <DayForecast daysForecast={daysForecast}/>
          </section>

          <section className={styles.rightContentCard}>
            <TodayHighlights
              min={town.min}
              max={town.max}
              feels_like={town.feels_like}
              pressure = {town.pressure}
              humidity = {town.humidity}
              sunrise = {town.sunrise}
              sunset = {town.sunset}
              visibility = {town.visibility}
            />
            <TodayAt hourlyWeather= {hourlyWeather}/>
          </section>
        </>
        ): undefined}
      </main>

    // <main className={styles.main}>
    //   <div className={styles.containerCard}>

    //     <section className={styles.leftContentCard}>
    //     {town.id !== undefined ? (
    //       <CurrentWeathere
    //         key={town.id}
    //         name={town.name}
    //         temp={town.temp}
    //         img={town.img}
    //         sys={town.sys}
    //         weather={town.weather}
    //         dayData = {town.dayData}
    //         daysForecast={daysForecast}
    //         hourlyWeather = {hourlyWeather}
    //       />
    //     ): undefined}
    //     <DayForecast daysForecast={daysForecast}/>
    //     </section>
      

    //     <section className={styles.rightContentCard}>
    //       <TodayHighlights
    //         min={town.min}
    //         max={town.max}
    //         feels_like={town.feels_like}
    //         pressure = {town.pressure}
    //         humidity = {town.humidity}
    //         sunrise = {town.sunrise}
    //         sunset = {town.sunset}
    //         visibility = {town.visibility}
    //       />
    //       <TodayAt hourlyWeather= {hourlyWeather}/>
    //     </section>
        
    //   </div>
    // </main>
  )
}

export default Cards