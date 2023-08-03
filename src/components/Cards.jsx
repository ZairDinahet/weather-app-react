import Card from './Card'

function Cards ({cities, onClose}) {
  return (
    <>
      {cities.length > 0 ? (
        <div>
          {cities?.map(city => (
              <Card
                key={city.id}
                name={city.name}
                temp={city.temp}
                min={city.min}
                max={city.max}
                img={city.img}
                onClose={() => onClose(city.id)}
              />
            ))}
        </div>
      ) : (undefined)}
    </>
  )
}

export default Cards