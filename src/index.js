import homePage from './home.js'
import aboutPage from './about.js'
import menuPage from './menu.js'

/* Main page display for the contents of main */
function app() {
	window.addEventListener('DOMContentLoaded', homePage())
	const navBar = document.querySelectorAll('[page]')

	navBar.forEach((btn) => {
		let content = document.querySelector('.content')
		btn.addEventListener('click', () => {
			// Reset content to prevent duplicates
			content.textContent = ''
			switch (btn.getAttribute('page')) {
				case 'home':
					homePage()
					break
				case 'about':
					aboutPage()
					break
				case 'menu':
					menuPage()
					break
			}
		})
	})
}
app()
