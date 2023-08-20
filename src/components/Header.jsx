import SearchBar from "./SearchBar";
import styles from "../styles/Header.module.css"

function Header ({onSearch}) {
  return (
    <header className={styles.header}>
      <div className={styles.authorContainer}>
        
        <ion-icon name="cloudy-night"></ion-icon>
        <p className={styles.itemTextHeader }>Weather app - Zair Dinahet</p>
      </div>
      <SearchBar onSearch = {onSearch}/>
    </header>
  )
}

export default Header