import './style.css'

export default function menuPage() {
	// Connect to content element on page.
	const content = document.querySelector('.content')
	const menuPage = document.createElement('div')

	// Create the contents of the content element for this page
	const headline = document.createElement('div')
	headline.classList.add('headline')
	headline.textContent = 'Here is the resturants menu! Yum!'

	const text = document.createElement('div')
	text.textContent = 'So many items that are totally there!'
	text.classList.add('text')

	menuPage.append(headline, text)
	content.appendChild(menuPage)
}
