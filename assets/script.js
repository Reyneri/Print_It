
// Tout d'abord j'ai du analyser les document html et css pour savoir qu'elle element allais etre interactit et  ou j'allis les placer les du definir les varialbes qui aller intervenir et les créer dans le fichier html
// Ensuite comment j'laais les definri la dans cas en utilsant le DOM pour aller recuper dans le doc les class d'elment qui seront interactive
// j'ai créer dans le document html les div .arrow_rigt and _left  et ensuite j'ai ai lié les images aapres leur avoir donner une tailler et possiton dans le css
//j'ai les ai defini en constant adans le javais script and documenet.querySelector () j'aurais pu ussi utilser l'autre moethdoe Querysomething 
// j'ai continuer l'analyse du comment pour savoir qu'elle ligne du html subiraist une modif lié à l'activation des fleche du carrouselle l'element qui subra modifcation est la banner imaage parcituelirment la class src= et le link verst l'imag
// aussi comme le text du carrouselle dois se modifier j'ai du definir dans le paragraph titre la classe tagline qui est elle meme deja presente dans l'array ( le tableu)
// present dans la constante slides et les valeur compris de son porte les trie "image" et le nom de l'image  "tagline" et le text present dans la tagline qui doi apperaitre sur la bonne diapostive -
//donc après avoir fait tout ça jde define 'attribus de base de bannerImage avec setAttribute("src", "adress de  l'image"+ position  du slid sur l'image numero 1) on notre que la postion 1 en javascript dans une tableau possède la vlaeur de 0 
// et o signal bien image comme natur du fichier ensuite on definete la postion originel de la tagline avec la truc innerHTML = slides constant du talbeau et je set le tagline numero 1 avec la valeur zero rapelle pour tout les tabelau  javscritp
// et je fini avec tagline pour signifer l'object utiliser  et j'ai defnie la variable avec let "slideNumber" = 0 en defineinsant cette varialbe j'ai une postion de valeur intial de refrence 
//En suite ce que je cvoualis c'est faire en sort que quand je clique sur une des fleche cette event créer l'action de changer de photo dans la bannier image 
// pour ffaire ça j'ai utilser l'eventlisenet avec addEventLisnter c'est un quelquechose comme le querySelctetor l'action a été define entr paranehte se curbé par entre guillet "click" il y aussi hover et utree ensutie on place le mon function() 
//  que je n'ai pas tres bien compris  et on instale la variable pour une adtion de +1  à a valeur qui est egale à zero 
//avec ++ qui rajoute direct 1 uniete de la vlaeur existnet et le if si la vlaeur de l'slideNumber et plus grande ou egale que que la lenget de a la valeur de l'array  
//  va changer le numero de slide et de tag line dan cette direction je fais l'invers pour la fleche gauche en utilisant la soustraction autotmatiqu -- ( i guess) 
// la la valeru de la action se faist quand elle est infierur à 0 et la longleur ( lenget ) du tableau valeur salide est negtive -1 et mon but c'est que le carrouselle dois etre infini  dans les deux sense  explique ça
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
	console.log("Bouton droit cliqué!");
	slideNumber++
if (slideNumber>= slides.length) {
	slideNumber = 0 ;
}

	bannerImage.setAttribute("src", "./assets/images/slideshow/" + slides[slideNumber].image)
	tagLine.innerHTML = slides[slideNumber].tagLine
})

leftArrow.addEventListener ("click", function() {
	console.log("Bouton gauche cliqué!")
	slideNumber--;
	if (slideNumber < 0 ) {
		slideNumber = slides.length -1 ;

	}

	bannerImage.setAttribute("src", "./assets/images/slideshow/"+ slides [slideNumber].image);
tagLine.innerHTML = slides[slideNumber].tagLine ;	
});


