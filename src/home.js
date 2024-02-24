import './style.css'
import myImage from './image.png'

const homePage = document.createElement('div')
const headline = document.createElement('div')
headline.classList.add('headline')
headline.textContent = 'The resturant page home paage page!'

const theImage = new Image()
theImage.src = myImage

const text = document.createElement('div')
text.textContent = 'What a wonderfully basic DOM manipulation page site!'
text.classList.add('text')

homePage.append(headline, theImage, text)

export default homePage
