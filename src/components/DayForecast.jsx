import imagen from "../assets/cloud.png"
import "../styles/DayForecast.css"

function DayForecast () {
  return (
    <section className="section forescast">
      <h2 className="title-2"> 5 Days Forescast </h2>
      <div className="card card-lg forecast-card">
        <ul>
          <li className="card-item">
            <div className="icon-wrapper">
              <img className="weather-icon" src={imagen} alt="" width={36} height={36} />
              <p className="title-2">25 </p>
            </div>

            <p className="label-1">17 Feb</p>
            <p className="label-1">Friday</p>
          </li>

          <li className="card-item">
            <div className="icon-wrapper">
              <img className="weather-icon" src={imagen} alt="" width={36} height={36} />
              <p className="title-2">25 </p>
            </div>

            <p className="label-1">17 Feb</p>
            <p className="label-1">Friday</p>
          </li>

          <li className="card-item">
            <div className="icon-wrapper">
              <img className="weather-icon" src={imagen} alt="" width={36} height={36} />
              <p className="title-2">25 </p>
            </div>

            <p className="label-1">17 Feb</p>
            <p className="label-1">Friday</p>
          </li>

          <li className="card-item">
            <div className="icon-wrapper">
              <img className="weather-icon" src={imagen} alt="" width={36} height={36} />
              <p className="title-2">25 </p>
            </div>

            <p className="label-1">17 Feb</p>
            <p className="label-1">Friday</p>
          </li>

          <li className="card-item">
            <div className="icon-wrapper">
              <img className="weather-icon" src={imagen} alt="" width={36} height={36} />
              <p className="title-2">25 </p>
            </div>

            <p className="label-1">17 Feb</p>
            <p className="label-1">Friday</p>
          </li>
        </ul>
      </div>
    </section>
  )
}


export default DayForecast