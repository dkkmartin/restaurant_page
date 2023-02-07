import { loadHome } from './home'
import { loadMenu } from './menu'
import './style.css'

(function listeners () {
  document.querySelector('.menu').addEventListener('click', () => {
    loadMenu()
  })
})()

loadHome()
