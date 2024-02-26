import '../../style.css'
import './menu.css'
const imagesContext = require.context(
	'../../../src/assets/images/menu',
	false,
	/\.(png|svg|jpg|jpeg|gif)$/i
)

export default function menuPage() {
	// Connect to content element on page.
	const content = document.querySelector('.content')
	const menuPage = document.createElement('div')

	// Create the contents of the content element for this page
	const headline = document.createElement('div')
	headline.classList.add('headline')
	headline.textContent = 'Here is the resturants menu! Yum!'

	const menu = document.createElement('div')
	menu.classList.add('menu')
	imagesContext.keys().forEach((imagePath) => {
		const menuItem = document.createElement('div')
		menuItem.classList.add('menuItem')
		const menuItemImg = new Image()
		menuItemImg.src = imagesContext(imagePath)
		menuItemImg.classList.add('image')

		const menuItemTxt = document.createElement('p')
		menuItemTxt.classList.add('desc')
		menuItemTxt.textContent = getCoffeeName(imagePath).toUpperCase()
		menuItem.append(menuItemImg, menuItemTxt)
		menu.appendChild(menuItem)
	})

	const text = document.createElement('div')
	text.textContent = 'So many items that are totally there!'
	text.classList.add('text')

	menuPage.append(headline, text, menu)
	content.appendChild(menuPage)
}

// Function to extract coffee name from the imagePath
function getCoffeeName(imagePath) {
	// Assuming imagePath is like './espresso.jpg'
	const coffeeNameWithExtension = imagePath.split('/').pop() // Get the last part after '/'
	const coffeeName = coffeeNameWithExtension.split('.')[0] // Remove the file extension
	return coffeeName
}
