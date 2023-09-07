import SearchBar from "./SearchBar";
import styles from "../styles/Header.module.css"

function Header ({onSearch}) {
  return (
    <header className={styles.header}>
      <div className={styles.authorContainer}>
        
        <ion-icon name="cloudy-night"></ion-icon>
        <a href="https://www.linkedin.com/in/zair-dinahet-993507224/" target="_blank" rel="noreferrer">
          <p className={styles.itemTextHeader }>Weather app - Zair Dinahet</p>
        </a>
      </div>
      <SearchBar onSearch = {onSearch}/>
    </header>
  )
}

export default Header