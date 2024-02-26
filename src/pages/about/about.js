import '../../style.css'
import './about.css'

let creditsArr = [
	'Adi Goldstein',
	'Tabitha Turner',
	'Caroline Veronez',
	'Gerson Cifuentes',
	'Nathan Dumlao',
]
export default function aboutPage() {
	// Connect to content element on page.
	const content = document.querySelector('.content')
	const aboutPage = document.createElement('div')

	// Create the contents of the content element for this page
	const headline = document.createElement('div')
	headline.classList.add('headline')
	headline.textContent = 'The resturants about page!'

	const text = document.createElement('p')
	text.textContent = 'Here is everything about the resturant!\r \n'
	text.textContent += ' Should it not have been obvious, this site is not real.'
	text.classList.add('text')

	const creditsContainer = document.createElement('div')
	creditsContainer.classList.add('creditsContainer')
	const creditsDesc = document.createElement('p')
	creditsDesc.textContent = 'Many thanks to the talented photographers below'
	creditsContainer.appendChild(creditsDesc)
	creditsArr.forEach((credit) => {
		const imgAuth = document.createElement('p')
		imgAuth.textContent = credit
		creditsContainer.appendChild(imgAuth)
	})

	aboutPage.append(headline, text, creditsContainer)
	content.appendChild(aboutPage)
}
