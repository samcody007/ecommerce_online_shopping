let tabSlide = document.querySelectorAll('.chosen-sneaker2')
let tabSlideParent = document.querySelector('.slide-tab-button')


let tabPage = 0

   leftBtn.addEventListener('click', () => {
    function removeActiveClass(){
        tabSlide.forEach(item => {
            item.classList.remove('chosen-sneaker2_active')
            item.style.opacity = '1'
            item.style.border = 'none'
        })
    }
    removeActiveClass()
    function addActiveClass(index = 0){
        tabSlide[index].classList.add('chosen-sneaker_active')
    }

    tabSlide.forEach((item, i) => {
        leftBtn.addEventListener('click', () => {
            removeActiveClass()
            addActiveClass(i)
            item.style.opacity = '0.25'
            
             
        })
    })
   })

