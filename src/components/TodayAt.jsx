import img from "../assets/cloud.png"
import styles from "../styles/TodayAt.module.css"


function TodayAt ({hourlyWeather}) {
  return (
    <div className={styles.hourlyForecast}>
      <h2 className={styles.title2}>Today at</h2>
      <div className={styles.sliderContainer}>

        <ul className={styles.sliderList}>
          {hourlyWeather.map(hour => {
            return (
          <li className={styles.sliderItem} key ={hour.id}>
            <div className={styles.sliderCard}>
              <p className={styles.body3}>{hour.hour}</p>
              <img  src={`http://openweathermap.org/img/wn/${hour.img}@2x.png`} alt="" width={40}/>
              <p className={styles.temp}>{hour.temp}&deg;<sup>c</sup></p>
            </div>
          </li>
            )
          })}
          
        </ul>
      </div>
    </div>
  )
}


export default TodayAt