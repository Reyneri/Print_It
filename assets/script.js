const rightArrow = document.querySelector(".arrow_right")
const leftArrow = document.querySelector(".arrow_left")
const bannerImage = document.querySelector(".banner-img")
const tagLine = document.querySelector(".tagline")

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
bannerImage.setAttribute("src", "./assets/images/slideshow/" + slides[0].image)
tagLine.innerHTML = slides[0].tagLine

let slideNumber = 0


rightArrow.addEventListener("click", function () {
	slideNumber++
if (slideNumber>= slides.length) {
	slideNumber = 0 ;
}

	bannerImage.setAttribute("src", "./assets/images/slideshow/" + slides[slideNumber].image)
	tagLine.innerHTML = slides[slideNumber].tagLine
})

leftArrow.addEventListener ("click", function() {
	slideNumber--;
	if (slideNumber < 0 ) {
		slideNumber = slides.length -1 ;

	}

	bannerImage.setAttribute("src", "./assets/images/slideshow/"+ slides [slideNumber].image);
tagLine.innerHTML = slides[slideNumber].tagLine ;	
});