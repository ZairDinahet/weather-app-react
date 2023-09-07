import styles from  "../styles/DayForecast.module.css"

function DayForecast ({daysForecast}) {
  return (
    <section className={styles.forescast} >
      <div className={styles.forecastCard} >
      <h2 className={styles.title2}> 5 Days Forescast </h2>
        <ul>
          {daysForecast.map((day) => {
            return (
          <li className={styles.cardItem} key ={day.id}>
            <div className={styles.iconWrapper}>
              <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${day.img}@2x.png`} width={40} height={36} />
              <p className={styles.temp}>{day.temp}&deg;<sup>c</sup></p>
            </div>

            <p className={styles.label1}>{day.day}</p>
          </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}


export default DayForecast