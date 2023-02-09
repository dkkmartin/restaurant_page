import img1 from './img/margherita-small.jpg'
import img2 from './img/pepperoni-small.jpg'
import img3 from './img/veggie-small.jpg'

function loadMenu () {
  const contentObject = [
    {
      h1: 'Delicious Pizzas Fresh from the Wood-Fired Oven'
    },
    {
      h3: 'Margherita Pizza',
      p: 'A classic pizza made with fresh mozzarella cheese, juicy tomatoes, and fragrant basil leaves. The tomato sauce is seasoned with garlic and olive oil, giving the pizza a bold and balanced flavor.'
    },
    {
      h3: 'Pepperoni Pizza',
      p: 'A fan favorite, this pizza is loaded with spicy pepperoni, melted mozzarella cheese, and a tangy tomato sauce. The combination of flavors is sure to satisfy any pizza lover\'s cravings.'
    },
    {
      h3: 'Veggie Pizza',
      p: 'This pizza is loaded with healthy, fresh vegetables including bell peppers, onions, mushrooms, and olives. The vegetables are combined with a rich tomato sauce, melted mozzarella cheese, and a sprinkle of herbs for a delicious and nutritious meal.'
    }

  ]
  const images = [img1, img2, img3]
  const contentDiv = document.getElementById('content')

  for (let i = 0; i < contentObject.length; i++) {
    let domElement
    const menuItem = document.createElement('div')
    for (const key in contentObject[i]) {
      domElement = document.createElement(`${key}`)
      domElement.textContent = contentObject[i][key]
      if (key === 'h1') {
        menuItem.classList.add('menu_title')
      } else {
        menuItem.classList.add(`menu_item${i}`)
      }
      menuItem.append(domElement)
      contentDiv.append(menuItem)
    }
  }

  for (let i = 1; i < 4; i++) {
    const contentImg = document.querySelector(`.menu_item${i}`)
    // eslint-disable-next-line no-undef
    const domElementImg = new Image()
    domElementImg.src = images[i - 1]
    contentImg.append(domElementImg)
  }
  // for value in key
//   console.log(contentObject[0].h3)
// // loop key names in for loop
//   for (const key in contentObject[i])
}

export { loadMenu }
