import { useState } from 'react';
import styles from "../styles/SearchBar.module.css";

function SearchBar ({onSearch}){
  const [city, setCity] = useState('')

  function handleSubmit (e){
    e.preventDefault();
    onSearch(city)
    setCity('')
  }

  return(
      <div className={styles.searchBarContainer}>
        <form onSubmit={handleSubmit}>
          <input 
          className={styles.searchBar}
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search City!"
          />
          <button type='submit' className={styles.submitClick} disabled={!city}>
          <ion-icon name="search-outline"></ion-icon>
          </button>
        </form>
      </div>
  )
}

export default SearchBar