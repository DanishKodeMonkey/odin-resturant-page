import './style.css'

export default function aboutPage() {
	// Connect to content element on page.
	const content = document.querySelector('.content')
	const aboutPage = document.createElement('div')

	// Create the contents of the content element for this page
	const headline = document.createElement('div')
	headline.classList.add('headline')
	headline.textContent = 'The resturants about page!'

	const text = document.createElement('div')
	text.textContent = 'Here is everything about the resturant!'
	text.classList.add('text')

	aboutPage.append(headline, text)
	content.appendChild(aboutPage)
}
