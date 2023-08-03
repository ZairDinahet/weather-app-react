function Card ({min, max, temp, name, img, onClose}) {
  return (
    <article>
      <div>
        <button onClick={onClose}>x</button>
      </div>

      <div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          width="100"
          height="100"
          alt={name}
        />
      </div>
      <h2>{name}</h2>
      <span >{temp}&deg;C</span>
      <p>{min}&deg;C / {max}&deg;C</p>
      </div>
    </article>
  )
}

export default Card