let Slides = document.querySelectorAll('.slider-mobile #mobil')
let prevBtn = document.querySelector('#leftButton')
let nextBtn = document.querySelector('#rightButton')
let slideCount = 0

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = Slides.length - 1
	}else{
		slideCount--
	}

	hideSlide()
	showSlide(slideCount)
	console.log('prev')
})

nextBtn.addEventListener('click', () => {
	if(slideCount >= Slides.length - 1){
		slideCount = 0
	}else{
		slideCount++
	}
	
	hideSlide()
	showSlide(slideCount)
})


function showSlide(i = 0){
	Slides[i].classList.add('active')
}

function hideSlide(){
	Slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}

hideSlide()
showSlide()