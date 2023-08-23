import img from "../assets/cloud.png"
import "../styles/TodayAt.css"


function TodayAt ({hourlyWeather}) {
  return (
    <div className="section card houly-forecast">
      <h2 className="title-2">Today at</h2>
      <div className="slider-container">

        <ul className="slider-list card-sm">
          {hourlyWeather.map(hour => {
            return (
          <li className="slider-item" key ={hour.id}>
            <div className="slider-card">
              <p className="body-3">{hour.hour}</p>
              <img  src={`http://openweathermap.org/img/wn/${hour.img}@2x.png`} alt="" width={40}/>
              <p className="temp">{hour.temp}&deg;<sup>c</sup></p>
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