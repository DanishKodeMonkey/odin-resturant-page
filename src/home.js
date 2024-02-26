import './style.css'
import myImage from './image.png'

export default function homePage() {
	// Connect to content element on page.
	const content = document.querySelector('.content')
	const homePage = document.createElement('div')

	// Create the contents of the content element for this page
	const headline = document.createElement('div')
	headline.classList.add('headline')
	headline.textContent = 'The resturant page home paage page!'

	const theImage = new Image()
	theImage.src = myImage

	const text = document.createElement('div')
	text.textContent = 'What a wonderfully basic DOM manipulation page site!'
	text.classList.add('text')

	homePage.append(headline, theImage, text)
	content.appendChild(homePage)
}
