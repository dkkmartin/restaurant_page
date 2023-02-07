import { loadHome } from './home'
import { loadMenu } from './menu'
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
  // document.querySelector('.about').addEventListener('click', () => {
  //   loadMenu()
  // })
})()

function removeContent () {
  document.querySelector('#content').textContent = ''
}

loadHome()
