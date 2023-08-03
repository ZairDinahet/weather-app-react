import { useState } from 'react';

function SearchBar ({onSearch}){
  const [city, setCity] = useState('')

  function handleSubmit (e){
    e.preventDefault();
    onSearch(city)
    setCity('')
  }

  return(
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a City"
        />
        <button type='submit'>Buscar</button>
      </form>
  )
}

export default SearchBar