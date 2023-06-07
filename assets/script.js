
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


function clicLeftCarrousel() {
	console.log(slides.length)
}

function clicRightCarrousel() {
	console.log('ogstelko')
}

function addClickListenerArrowsLeft() {
	let arrowLeft = document.getElementById("arrowleft")
	arrowLeft.addEventListener("click", () => {
		clicLeftCarrousel()
	})
}

function addClickListenerArrowsRight() {
	let arrowRight = document.getElementById("arrowright")
	arrowRight.addEventListener("click", () => {
		clicRightCarrousel()
	})
}

addClickListenerArrowsLeft()
addClickListenerArrowsRight()