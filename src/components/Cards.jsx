import Card from './Card'
import CurrentWeathere from './CurrentWeather'
import styles from '../styles/Cards.module.css'

function Cards ({cities, onClose, getDay, getTime}) {
  return (
    // <>
    //   {cities.length > 0 ? (
    //     <div className={styles.containerCards}>
    //       {cities?.map(city => (
    //           <Card
    //             key={city.id}
    //             name={city.name}
    //             temp={city.temp}
    //             min={city.min}
    //             max={city.max}
    //             img={city.img}
    //             onClose={() => onClose(city.id)}
    //           />
    //         ))}
    //     </div>
    //   ) : (undefined)}
    // </>
    <>
      {cities.length > 0 ? (
        <div >
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
                dayData = {getDay(city.dt, city.timezone)}
                feels_like={city.feels_like}
                pressure = {city.pressure}
                humidity = {city.humidity}
                sunrise = {getTime(city.sunrise, city.timezone)}
                sunset = {getTime(city.sunset, city.timezone )}
                visibility = {city.visibility}
                onClose={() => onClose(city.id)}
              />
            ))}
        </div>
      ) : (undefined)}
    </>
  )
}

export default Cards