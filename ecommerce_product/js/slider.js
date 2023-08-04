let slides = document.querySelectorAll('.slide-image .slide')
let inSlide = document.querySelector('.slide-image')
let leftBtn = document.querySelector('.slide-to-left')
let rightBtn = document.querySelector('.slide-to-right')
let slideTab = document.querySelectorAll('.chosen-sneaker2')


//Carousel Slider
let slidePage = 0
leftBtn.addEventListener('click', () => {
    if(slidePage <= 0){
        slidePage = slides.length - 1  
    }else{
        slidePage--
       
    }
    
    
    inSlide.style.transform = `translateX(-${slidePage * 550}px)`
        removeHover()
        slideTab[slidePage].classList.add('active')

})
function removeHover(){
    slideTab.forEach(item => {
        item.classList.remove('active')
    })
}
    
rightBtn.addEventListener('click', () => {
    if(slidePage < slides.length - 1){
        slidePage++
    }else{
        slidePage = 0
    }
 
        
         
    
    inSlide.style.transform = `translateX(-${slidePage * 550}px)`
    removeHover()
    slideTab[slidePage].classList.add('active')
})