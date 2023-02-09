import { loadHome } from './home'
import { loadMenu } from './menu'
import { loadAbout } from './about'
import './style.css'

(function listeners () {
  document.querySelector('.home').addEventListener('click', () => {
    removeContent()
    loadHome()
  })
  document.querySelector('.menu').addEventListener('click', () => {
    removeContent()
    loadMenu()
  })
  document.querySelector('.about').addEventListener('click', () => {
    removeContent()
    loadAbout()
  })
})()

function removeContent () {
  document.querySelector('#content').textContent = ''
}

loadHome()
