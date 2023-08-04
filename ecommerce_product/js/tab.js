let sneakerLink = document.querySelectorAll('.chosen-sneaker')
let sneakerLinkParent = document.querySelector('.sneakers-types')
let sneakerContent = document.querySelectorAll('.main-sneakers') 

addActiveClass(0)

function removeActiveClass(){
	sneakerLink.forEach(item => {
		item.classList.remove('chosen-sneaker_active')
		item.style.opacity = '1'
	})
	sneakerContent.forEach(item => {
		item.classList.remove('active-sneaker')
	})
}

function addActiveClass(index = 0){
	sneakerContent[index].classList.add('active-sneaker')
	sneakerLink[index].classList.add('chosen-sneaker_active')
}

sneakerLink.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActiveClass()
		addActiveClass(i)
		item.style.opacity = '0.25'
		
		 
    })
})