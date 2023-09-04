import React from 'react'
import styles from "../styles/TodayHighlights.module.css"

function TodayHighlights({sunrise, sunset, min, max, visibility, humidity, pressure, feels_like}) {
  return (

    <div className={styles.contentRight}>
      <div className={styles.featuredContainer}>
        <h2 className={styles.title2}>Today Highlights</h2>

        <div className={styles.highlightList}>

          <div>
            <div className={styles.highlightCard}>

              <h3 className={styles.title3}>Sunrise & Sunset</h3>

              <div className={styles.cardList}>

                <div className={styles.cardItem}>
                  <div className={styles.ionIcon}>
                    <ion-icon name="sunny-outline"></ion-icon>
                  </div>
                  <div>
                    <p className={styles.label1}>Sunrise</p>
                    <p className={styles.title1}>{sunrise}</p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <div className={styles.ionIcon}>
                    <ion-icon ion-icon name="cloudy-night-outline"></ion-icon>
                  </div>
                  <div>
                    <p className={styles.label1}>Sunset</p>
                    <p className={styles.title1}>{sunset}</p>
                  </div>
                </div>

              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.highlightCard}>
                <h3 className={styles.title3}>Humidity</h3>

                <div className={styles.wrapper}>
                  <div className={styles.ionIcon}>
                    <ion-icon name="water-outline"></ion-icon>
                  </div>
                  <p className={styles.title1}> {humidity} <sub>%</sub> </p>
                </div>
              </div>

              <div className={styles.highlightCard}>
                <h3 className={styles.title3}>Pressure</h3>

                <div className={styles.wrapper}>
                  <div className={styles.ionIcon}>
                    <ion-icon name="arrow-down-outline"></ion-icon>
                  </div>
                  <p className={styles.title1}> {pressure} <sub>hPa</sub> </p>
                </div>
              </div>
            </div>
          </div>







          <div>
            <div className={styles.highlightCard}>

              <h3 className={styles.title3}>Temperature Variation</h3>

              <div className={styles.cardList}>

                <div className={styles.cardItem}>
                  <div className={styles.ionIcon}>
                    <ion-icon name="thermometer-outline"></ion-icon>
                  </div>

                  <div className={styles.title}>
                    <p className={styles.label1}>Minimum</p>
                    <p className={styles.title1}>{min}&deg;<sup>c</sup></p>
                  </div>

                </div>
                <div className={styles.cardItem}>
                  <div className={styles.ionIcon}>
                    <ion-icon name="thermometer-outline"></ion-icon>
                  </div>
                  <div className={styles.title}>
                    <p className={styles.label1}>Maximum</p>
                    <p className={styles.title1}>{max}&deg;<sup>c</sup></p>
                  </div>

                </div>

              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.highlightCard}>
              <h3 className={styles.title3}>Visibility</h3>

              <div className={styles.wrapper}>
                <div className={styles.ionIcon}>
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <p className={styles.title1}> {visibility/1000} <sub>km</sub> </p>
              </div>
              </div>

              <div className={styles.highlightCard}>
              <h3 className={styles.title3}>Feels like</h3>

              <div className={styles.wrapper}>
                <div className={styles.ionIcon}>
                  <ion-icon name="thermometer-outline"></ion-icon>
                </div>
                <p className={styles.title1}> {feels_like}&deg; <sup>c</sup> </p>
              </div>
              </div>
            </div>
          </div>

        </div>


        {/* Opcion 1 */}
        {/* <div className={styles.highlightList}>
          <div className={styles.highlightCard}>

            <h3 className={styles.title3}>Sunrise & Sunset</h3>

            <div className={styles.cardList}>

              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon name="sunny-outline"></ion-icon>
                </div>
                <div className={styles.title}>
                  <p className={styles.label1}>Sunrise</p>
                  <p className={styles.title1}>{sunset}</p>
                </div>
              </div>

              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon ion-icon name="cloudy-night-outline"></ion-icon>
                </div>
                <div className={styles.title}>
                  <p className={styles.label1}>Sunset</p>
                  <p className={styles.title1}>{sunset}</p>
                </div>
              </div>

            </div>
          </div>
          <div className={styles.highlightCard}>

            <h3 className={styles.title3}>Temperature Variation</h3>

            <div className={styles.cardList}>

              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon name="thermometer-outline"></ion-icon>
                </div>

                <div className={styles.title}>
                  <p className={styles.label1}>Minimum</p>
                  <p className={styles.title1}>{min}&deg;<sup>c</sup></p>
                </div>

              </div>
              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon name="thermometer-outline"></ion-icon>
                </div>
                <div className={styles.title}>
                  <p className={styles.label1}>Maximum</p>
                  <p className={styles.title1}>{max}&deg;<sup>c</sup></p>
                </div>

              </div>

            </div>
          </div>
        </div>


        <div className={styles.highlightList}>
            <div className={styles.highlightCard}>
              <h3 className={styles.title3}>Humidity</h3>

              <div className={styles.wrapper}>
                <div className={styles.ionIcon}>
                  <ion-icon name="water-outline"></ion-icon>
                </div>
                <p className={styles.title1}> {humidity} <sub>%</sub> </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <h3 className={styles.title3}>Pressure</h3>

              <div className={styles.wrapper}>
                <div className={styles.ionIcon}>
                  <ion-icon name="arrow-down-outline"></ion-icon>
                </div>
                <p className={styles.title1}> {pressure} <sub>hPa</sub> </p>
              </div>
            </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.title3}>Visibility</h3>

            <div className={styles.wrapper}>
              <div className={styles.ionIcon}>
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <p className={styles.title1}> {visibility/1000} <sub>km</sub> </p>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.title3}>Feels like</h3>

            <div className={styles.wrapper}>
              <div className={styles.ionIcon}>
                <ion-icon name="thermometer-outline"></ion-icon>
              </div>
              <p className={styles.title1}> {feels_like}&deg; <sup>c</sup> </p>
            </div>
          </div>

        </div> */}




        {/* <div className={styles.highlightList}>
        
          <div className={styles.highlightCard}>

            <h3 className={styles.title3}>Sunrise & Sunset</h3>

            <div className={styles.cardList}>

              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon name="sunny-outline"></ion-icon>                 
                </div>
                <div className={styles.title}>
                  <p className={styles.label1}>Sunrise</p>
                  <p className={styles.title1}>{sunrise}</p>
                </div>
              </div>

              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon ion-icon name="cloudy-night-outline"></ion-icon>                   
                </div>
                <div className={styles.title}>
                  <p className={styles.label1}>Sunset</p>
                  <p className={styles.title1}>{sunset}</p>
                </div>
              </div>


            </div>
          </div>

          <div className={styles.highlightCard}>

            <h3 className={styles.title3}>Temperature Variation</h3>

            <div className={styles.cardList}>

              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon name="thermometer-outline"></ion-icon>
                </div>

                <div className={styles.title}>
                  <p className={styles.label1}>Minimum</p>
                  <p className={styles.title1}>{min}&deg;<sup>c</sup></p>
                </div>

              </div>
              <div className={styles.cardItem}>
                <div className={styles.ionIcon}>
                  <ion-icon name="thermometer-outline"></ion-icon>
                </div>
                <div className={styles.title}>
                  <p className={styles.label1}>Maximum</p>
                  <p className={styles.title1}>{max}&deg;<sup>c</sup></p>
                </div>

              </div>

            </div>
          </div>
          

          <div className={styles.highlightCard}>
            <h3 className={styles.title3}>Humidity</h3>

            <div className={styles.wrapper}>
              <div className={styles.ionIcon}>
                <ion-icon name="water-outline"></ion-icon>
              </div>
              <p className={styles.title1}> {humidity} <sub>%</sub> </p>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.title3}>Pressure</h3>

            <div className={styles.wrapper}>
              <div className={styles.ionIcon}>
                <ion-icon name="arrow-down-outline"></ion-icon>
              </div>
              <p className={styles.title1}> {pressure} <sub>hPa</sub> </p>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.title3}>Visibility</h3>

            <div className={styles.wrapper}>
              <div className={styles.ionIcon}>
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <p className={styles.title1}> {visibility/1000} <sub>km</sub> </p>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.title3}>Feels like</h3>

            <div className={styles.wrapper}>
              <div className={styles.ionIcon}>
                <ion-icon name="thermometer-outline"></ion-icon>
              </div>
              <p className={styles.title1}> {feels_like}&deg; <sup>c</sup> </p>
            </div>
          </div>

        </div> */}
      </div>
    </div>
  )
}

export default TodayHighlights