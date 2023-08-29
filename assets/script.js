

const rightArrow = document.querySelector(".arrow_right")
const leftArrow = document.querySelector(".arrow_left")
const bannerImage = document.querySelector(".banner-img")
const tagLine = document.querySelector(".tagline")

const dots = document.querySelectorAll(".dot")
console.log(dots[0])
let slideNumber

function init() {
	bannerImage.setAttribute("src", "./assets/images/slideshow/" + slides[0].image)
	tagLine.innerHTML = slides[0].tagLine
	slideNumber = 0
	dots[0].classList.add("dot_selected")
}
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



init()

rightArrow.addEventListener("click", function () {
	console.log("Bouton droit cliqué! ");
	slideNumber++
	console.log("Numero de bullet point " + slideNumber)
	if (slideNumber >= slides.length) {
		slideNumber = 0;
		dots[slideNumber].classList.add("dot_selected")
		dots[slides.length - 1].classList.remove("dot_selected")
	} else {
		dots[slideNumber].classList.add("dot_selected")
		dots[slideNumber - 1].classList.remove("dot_selected")
	}

	bannerImage.setAttribute("src", "./assets/images/slideshow/" + slides[slideNumber].image)
	tagLine.innerHTML = slides[slideNumber].tagLine
})


leftArrow.addEventListener("click", function () {
	console.log("Bouton gauche cliqué! ")
	console.log("Bouton actuellement sélectionné n°" + slideNumber);

	dots[slideNumber].classList.remove("dot_selected"); 
	slideNumber--;
	if (slideNumber < 0) {
		slideNumber = slides.length - 1;
	}
dots [ slideNumber].classList.add("dot_selected");

	bannerImage.setAttribute("src", "./assets/images/slideshow/" + slides[slideNumber].image);
	tagLine.innerHTML = slides[slideNumber].tagLine;

});



 