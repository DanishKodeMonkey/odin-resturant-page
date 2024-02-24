import homePage from './home.js'

/* Main page display for the contents of main */

function app() {
	const content = document.querySelector('.content')

	content.appendChild(homePage)

	/* Code to append contents of component page for render */
}
app()
