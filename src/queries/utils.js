import Swal from 'sweetalert2/dist/sweetalert2.js'
import '@sweetalert2/theme-dark/dark.css';
import styles from '../styles/Sweet.module.css'


const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

export function getDay (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()]
  
  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`
}


export function getTime(timeUnix, timezone){
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  
  return `${hours % 12||12}:${minutes} ${period}`
}

export function getHours(timeUnix, timezone){
  const date = new Date((timeUnix + timezone * 3600) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";
  
  return `${hours % 12||12} ${period}`
}

export function alertSweet() {
  return Swal.fire({
    title: 'Error!',
    text: 'The city was not found.',
    icon: 'error',
    confirmButtonText: 'Alright',
    confirmButtonColor: 'hsla(0, 0%, 100%, 0.04)',
    customClass: styles.swalStyle
  })
}


