import styles from "../styles/Footer.module.css";


function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://www.linkedin.com/in/zair-dinahet-993507224/" target="_blank" rel="noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://github.com/ZairDinahet" target="_blank" rel="noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        
        
      </div>
    </footer>
  )
}

export default Footer;