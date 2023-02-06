import img1 from './img/pizza-wide-1-copy.jpg'
import img2 from './img/pizza-slice-copy.jpg'
import img3 from './img/home-bake-2-copy.jpg'
import img4 from './img/pizza-menu-1-copy.jpg'

function loadHome () {
  const contentObject = {
    h1: 'Discover the Best Tasting Experience at Casa Blanca',
    p: 'Welcome to the Home of the Best Homemade Pizzas! Here at Casa Blanca, we take pride in our authentic and delicious pizzas, made with only the freshest ingredients and our secret family recipes. Whether you\'re in the mood for a classic Margherita, or something more adventurous like our BBQ Chicken, you\'re guaranteed to enjoy every bite. Browse through our menu, get a taste of our mouth-watering creations, and visit us today to experience the best homemade pizzas you\'ll ever taste!'
  }

  const images = [img1, img2, img3, img4]
  const contentDiv = document.getElementById('content')
  const divImg = document.createElement('div')
  const divText = document.createElement('div')

  Object.entries(contentObject).forEach(entry => {
    const domElement = document.createElement(`${entry[0]}`)
    domElement.textContent = entry[1]
    divText.classList.add('text_con')
    divText.append(domElement)
    contentDiv.append(divText)
  })

  images.forEach(entry => {
    // eslint-disable-next-line no-undef
    const domElement = new Image()
    domElement.src = entry
    divImg.classList.add('img_con')
    divImg.append(domElement)
    contentDiv.append(divImg)
  })
}

export { loadHome }
