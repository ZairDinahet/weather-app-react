import "../styles/DayForecast.css"

function DayForecast ({daysForecast}) {
  return (
    <section className="section forescast">
      <div className="card card-lg forecast-card">
      <h2 className="title-2"> 5 Days Forescast </h2>
        <ul>

          {daysForecast.map((day) => {
            return (
          <li className="card-item" key ={day.id}>
            <div className="icon-wrapper">
              <img className="weather-icon" src={`http://openweathermap.org/img/wn/${day.img}@2x.png`} width={40} height={36} />
              <p className="title-2">{day.temp}&deg;<sup>c</sup></p>
            </div>

            <p className="label-1">{day.day}</p>
            {/* <p className="label-1">Friday</p> */}
          </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}


export default DayForecast