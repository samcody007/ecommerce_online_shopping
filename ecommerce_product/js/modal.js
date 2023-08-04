	let openBtn = document.querySelector('.main-sneakers'),
	closeBtn = document.querySelector('.close-button'),
	modal = document.querySelector('.modal-content'),
	wrapper = document.querySelector('.wrapper'),
	overall = document.querySelector('.overall')

	function closeModal(){
	modal.style.display = 'none'
	document.body.style.overflowY = ''
	overall.classList.add('hidden')
}

closeBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
	const target = e.target
	if(target.classList.contains('modal-content')){
		closeModal()
	}
	// console.log('some')
	// console.log(e.target)
})


sneakerContent.forEach((item) => {
	item.addEventListener('click', () => {
		modal.style.display = 'flex'
		overall.classList.remove('hidden')
		closeBtn.classList.remove('hidden')
	})
})

