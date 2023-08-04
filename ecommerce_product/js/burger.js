let burgerEl = document.querySelector('.header-burger')
let burgerContent = document.querySelector('.burger-of-modal')
let removeBurgerBtn = document.querySelector('.burger-header')

burgerEl.addEventListener('click', () =>{
    burgerContent.style.display = 'block'
    overall.classList.remove('hidden')
})
removeBurgerBtn.addEventListener('click', ()=>{
    burgerContent.style.display = 'none'
    overall.classList.add('hidden')
})
