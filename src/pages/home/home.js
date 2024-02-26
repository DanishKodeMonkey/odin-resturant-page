import '../../style.css'
export default function homePage() {
	// Connect to content element on page.
	const content = document.querySelector('.content')
	const homePage = document.createElement('div')

	// Create the contents of the content element for this page
	const textContent = document.createElement('div')
	const headline = document.createElement('h1')
	headline.classList.add('headline')
	headline.textContent = 'Welcome to the coffee lovers Cafe!'

	const text = document.createElement('p')
	text.textContent = 'Here at the coffee lovers cafe, we too love coffee! \r\n'
	text.textContent += 'Have a look around! \r\n'
	text.classList.add('text')

	textContent.append(headline, text)
	homePage.appendChild(textContent)
	content.appendChild(homePage)
}
