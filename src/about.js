function loadAbout () {
  const aboutContent = [
    { h1: 'About us' },
    { p: 'At Casa Blanca, we take pride in serving our customers the highest quality of pizza. Our dough is made fresh every day and our ingredients are locally sourced, so you can be sure you\'re getting the best possible pizza. We offer a wide variety of pizzas, from classic cheese and pepperoni to more creative options like spinach and feta. Our menu also includes sides like garlic knots, salads, and wings.' },
    { p: 'We strive to make every customer feel like family. In addition to our delicious pizza, we offer a friendly, welcoming atmosphere and friendly service. We look forward to serving you and your family soon!' },
    { p: 'We are open seven days a week for lunch and dinner. ' },
    { h3: 'Our hours are: ' },
    { p: 'Monday: 11AM - 9PM' },
    { p: 'Tuesday: 11AM - 9PM' },
    { p: 'Wednesday: 11AM - 9PM' },
    { p: 'Thursday: 11AM - 9PM' },
    { p: 'Friday: 11AM - 9PM' },
    { p: 'Saturday: 11AM - 9PM' },
    { p: 'Sunday: 11AM - 8PM' }

  ]

  const contentDiv = document.getElementById('content')
  const menuDiv = document.createElement('div')
  menuDiv.classList.add('about_con')

  for (let i = 0; i < aboutContent.length; i++) {
    let domElement
    for (const key in aboutContent[i]) {
      domElement = document.createElement(`${key}`)
      domElement.textContent = aboutContent[i][key]
      if (domElement.innerText.includes('11AM')) {
        domElement.classList.add('p_time')
      }
      menuDiv.append(domElement)
      contentDiv.append(menuDiv)
    }
  }
//   Object.entries(aboutContent).forEach(entry => {
//     const domElement = document.createElement(`${entry[0]}`)
//     domElement.textContent = entry[1]
//     divText.classList.add('text_con')
//     divText.append(domElement)
//     contentDiv.append(divText)
//   })
}

export { loadAbout }
