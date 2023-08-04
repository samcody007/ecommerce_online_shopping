let addCart = document.querySelector('.order')
let addingCard = document.querySelector('.adding-card')
let priceValue = document.querySelector('.sum')
let notify = document.querySelector('.notification')
let free = document.querySelector('.empty')
let checkout = document.querySelector('.card-checkout')
let shoppingBtn = document.querySelector('.recycle')
let removeBtn = document.querySelector('.remove')

function closeCart(){
	addingCard.style.display = 'none'
}
function cardToggle(){
	if(addingCard.style.display === 'none'){
		addingCard.style.display = 'block'
		if(countAmount === 0){
			free.style.display = 'block'
			
		}
		else if(notify.style.display === 'none'){
			free.style.display = 'block'
		}
		else{
			// addingCard.classList.remove('hidden-check')
			checkout.style.display = 'block'
			let result = 125   * countAmount
			let overview = countAmount + ' ' + '$' + result
			priceValue.innerHTML = overview
		}
	}
	else{
		addingCard.style.display = 'none'
	}
}
shoppingBtn.addEventListener('click', cardToggle)
addCart.addEventListener('click', () => {
		notify.innerHTML = countAmount
		notify.style.display = 'flex'

		addingCard.style.display = 'block'
		if(countAmount === 0){
			free.style.display = 'block'
		}
		else{
			// addingCard.classList.remove('hidden-check')
			checkout.style.display = 'block'
			let result = 125   * countAmount
			let overview = countAmount + ' ' + '$' + result
			priceValue.innerHTML = overview
		}

	
})
removeBtn.addEventListener('click' , () =>{
	checkout.style.display = 'none'
	free.style.display = 'block'
	notify.style.display = 'none'
	
})

addingCard.addEventListener('click', (e) => {
	const target = e.target
	if(e.target.classList.contains('adding-card')){
		console.log('done')
		closeCart()
	}
	
	// console.log(e.target)
})

