import CurrentWeather from './CurrentWeather'
import DayForecast from './DayForecast'
import TodayHighlights from './TodayHighlights'
import TodayAt from "./TodayAt"
import styles from '../styles/Card.module.css'

function Cards ({town, daysForecast, hourlyWeather}) {

  return (
    <main className={styles.container}>

      {town.id == undefined ?
        <div className={styles.loading}>
          <ion-icon name="reload-outline"></ion-icon>
        </div> : undefined
      }

      <section className={`${styles.containerCard} ${town.id !== undefined ? styles.cardVisible : styles.cardHidden}`}>
        {town.id !== undefined ? (
          <>
            <section className={styles.leftContentCard}>
              <CurrentWeather
                key={town.id}
                name={town.name}
                temp={town.temp}
                img={town.img}
                sys={town.sys}
                weather={town.weather}
                dayData={town.dayData}
                daysForecast={daysForecast}
                hourlyWeather={hourlyWeather}
              />
              <DayForecast daysForecast={daysForecast} />
            </section>

            <section className={styles.rightContentCard}>
              <TodayHighlights
                min={town.min}
                max={town.max}
                feels_like={town.feels_like}
                pressure={town.pressure}
                humidity={town.humidity}
                sunrise={town.sunrise}
                sunset={town.sunset}
                visibility={town.visibility}
              />
              <TodayAt hourlyWeather={hourlyWeather} />
            </section>
          </>
        ) : undefined}
      </section>
    </main> 
      
  )
}

export default Cards



