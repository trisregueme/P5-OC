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

// ---> Flèches du carrousel
// 1. Event Listeners des flèches
const arrowRight = document.querySelector(".arrow_right")
const arrowLeft = document.querySelector(".arrow_left")

arrowLeft.addEventListener("click", () => {
	changeImg(-1)
})

arrowRight.addEventListener("click", () => {
	changeImg(1)
})

// 2. Elements utiles aux fonctions pour les flèches
// const urlImageBanner = slides.map(slide => slide.image)
// const textImage = slides.map(slide => slide.tagLine)
//condition si pas de tagLine

let imgCarrousel = document.querySelector(".banner-img")
let textCarrousel = document.querySelector("#banner p")

let i = 0
// imgCarrousel.src = `./assets/images/slideshow/${urlImageBanner[i]}`
// textCarrousel.innerHTML = `${textImage[i]}`
imgCarrousel.src = `./assets/images/slideshow/${slides[i].image}`
textCarrousel.innerHTML = `${slides[i].tagLine}`

// ---> "Dots" du carrousel
// 1. Déclaration de notre division "dots" pour y lier no "dot"
const dotsDiv = document.querySelector(".dots")

// 2. Création des balises HTML
for (let _images of slides) {
	const dotCarrousel = document.createElement("p")
	dotCarrousel.innerText = ""
	dotCarrousel.classList.add("dot")
	dotsDiv.appendChild(dotCarrousel)
}

// 3. Application de "dot_selected" au premier "dot"
let selectedDot = document.getElementsByClassName("dot")[i]
selectedDot.classList.add("dot_selected")

// -> Fonction pour l'interaction avec carrousel
function changeImg(value) {
	selectedDot.classList.remove('dot_selected')
	i += value
	if (i < 0) {
		i = slides.length - 1
	} else if (i >= slides.length) {
		i = 0
	}
	// imgCarrousel.src = `./assets/images/slideshow/${urlImageBanner[i]}`
	imgCarrousel.src = `./assets/images/slideshow/${slides[i].image}`
	// textCarrousel.innerHTML = `${textImage[i]}`
	textCarrousel.innerHTML = `${slides[i].tagLine}`
	selectedDot = document.getElementsByClassName("dot")[i]
	selectedDot.classList.add("dot_selected")
}

// function changeImgSrcPrevious() {
// 	selectedDot.classList.remove("dot_selected")
// 	if (i > 0) {
// 		i--
// 	} else if (i === 0) {
// 		i = slides.length-1
// 	}
// 	imgCarrousel.src = `./assets/images/slideshow/${urlImageBanner[i]}`
// 	textCarrousel.innerHTML = `${textImage[i]}`
// 	selectedDot = document.getElementsByClassName("dot")[i]
// 	selectedDot.classList.add("dot_selected")
// }

// function changeImgSrcNext() {
// 	selectedDot.classList.remove("dot_selected")
// 	if (i < slides.length-1) {
// 		i++
// 	} else if (i === slides.length-1) {
// 		i = 0
// 	}
// 	imgCarrousel.src = `./assets/images/slideshow/${urlImageBanner[i]}`
// 	textCarrousel.innerHTML = `${textImage[i]}`
// 	selectedDot = document.getElementsByClassName("dot")[i]
// 	selectedDot.classList.add("dot_selected")
// }
