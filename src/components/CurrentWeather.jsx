import styles from '../styles/CurrentWeather.module.css'

function CurrentWeathere ({temp, name, img, sys, weather, dayData}) {

  return (
        <section className={styles.container}>
          <div className={styles.currentWeatherCard}>
            <h2 className= {styles.title2}>Now</h2>

            <div className={styles.wrapper}>
              <p className={styles.heading}>{temp}&deg;<sup>c</sup></p>

              <img 
              className={styles.weatherIcon}
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt={name} />
            </div>
            <p>{weather[0].toUpperCase() + weather.slice(1)}</p>

            <ul className={styles.metaList}>

              <li className={styles.metaItem}>
                <ion-icon name="calendar-outline"></ion-icon>

                <p className={styles.title3}>{dayData}</p>
              </li>

              <li className={styles.metaItem}>
                <ion-icon name="location-outline"></ion-icon>

                <p className={styles.title3}>{name}, {sys}</p>
              </li>
              
            </ul>
          </div>
        </section>
  )
}



export default CurrentWeathere