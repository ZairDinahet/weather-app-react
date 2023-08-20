import imagen from "../assets/cloud.png"
import  '../styles/CurrentWeather.css'

function CurrentWeathere ({min, max, temp, name, img, sys, weather, dayData, feels_like, pressure, humidity, visibility, sunrise, sunset,onClose}) {

  return (
    <>
    <article className="container">  
      <div className="content-left">
        <section className="current-weather">
          <div className="card card-lg current-weather-card">
            {/* <button onClick={onClose}>x</button> */}
            <h2 className= "title-2 card-title">Now</h2>

            <div className="wrapper">
              <p className="heading">{temp}&deg;<sup>c</sup></p>

              <img 
              className='weather-icon'
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt={name} />
            </div>
            <p>{weather[0].toUpperCase() + weather.slice(1)}</p>

            <ul className='meta-list'>

              <li className='meta-item'>
                <ion-icon name="calendar-outline"></ion-icon>

                <p className='title-3 meta-text'>{dayData}</p>
              </li>

              <li className='meta-item'>
                <ion-icon name="location-outline"></ion-icon>

                <p className='title-3 meta-text'>{name}, {sys}</p>
              </li>
              
            </ul>
          </div>
        </section>
      </div>
      {/* Today Highlights */}

      <div className="content-right">

        <section className="section highlights">

          <div className="card card-lg">

            <h2 className="title-2">Today Highlights</h2>

            <div className="highlight-list">

              {/* <div className="card card-sm highlight-card one">
                <h3 className="title-3">Air Quality Index</h3>
                <div className="wrapper">
                <ion-icon name="thunderstorm-outline"></ion-icon>
                  <ul className="card-list">

                    <li className="card-item">
                      <p className="title-1">23.3</p>
                      <p className="labe-1">PM <sub>2.5</sub></p>
                    </li>
                  </ul>
                </div>
              

                
              </div> */}
            
              <div className="card card-sm highlight-card">

                <h3 className="title-3">Sunrise & Sunset</h3>

                <div className="card-list">

                  <div className="card-item">
                    <ion-icon name="sunny-outline"></ion-icon>                 
                    <div>
                      <p className="label-1">Sunrise</p>
                      <p className="title-1">{sunrise}</p>
                    </div>
                  </div>

                  <div className="card-item">
                    <ion-icon name="cloudy-night-outline"></ion-icon>                   
                    <div>
                      <p className="label-1">Sunset</p>
                      <p className="title-1">{sunset}</p>
                    </div>
                  </div>


                </div>
              </div>

              <div className="card card-sm highlight-card">

                <h3 className="title-3">Temperature Variation</h3>

                <div className="card-list">

                  <div className="card-item">
                    <ion-icon name="thermometer-outline"></ion-icon>

                    <div>
                      <p className="label-1">Minimum</p>
                      <p className="title-1">{min}&deg;<sup>c</sup></p>
                    </div>

                  </div>
                  <div className="card-item">
                    <ion-icon name="thermometer-outline"></ion-icon>
                    <div>
                      <p className="label-1">Maximum</p>
                      <p className="title-1">{max}&deg;<sup>c</sup></p>
                    </div>

                  </div>

                </div>
              </div>
              

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Humidity</h3>

                <div className="wrapper">
                  <ion-icon name="water-outline"></ion-icon>
                  <p className="title-1"> {humidity} <sub>%</sub> </p>
                </div>
              </div>

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Pressure</h3>

                <div className="wrapper">
                  <ion-icon name="arrow-down-outline"></ion-icon>
                  <p className="title-1"> {pressure} <sub>hPa</sub> </p>
                </div>
              </div>

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Visibility</h3>

                <div className="wrapper">
                  <ion-icon name="eye-outline"></ion-icon>
                  <p className="title-1"> {visibility/1000} <sub>km</sub> </p>
                </div>
              </div>

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Feels like</h3>

                <div className="wrapper">
                  <ion-icon name="thermometer-outline"></ion-icon>
                  <p className="title-1"> {feels_like}&deg; <sup>c</sup> </p>
                </div>
              </div>

            </div>
          </div>

        </section>

      </div>

    </article>
    </>
  )
}



export default CurrentWeathere