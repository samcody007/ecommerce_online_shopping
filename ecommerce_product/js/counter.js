let incBtn = document.querySelector('.inc'),
		decBtn = document.querySelector('.dec'),
		count = document.querySelector('.number')
let countAmount = 0
count.innerText = countAmount


function decrement(){
	if(countAmount === 0){

		countAmount = 0
	}
	else{
		countAmount--
	}
	count.innerText = countAmount
}

decBtn.addEventListener('click', decrement)

function increment(){
	countAmount++
	count.innerText = countAmount
	if(countAmount === 10){
		incBtn.removeEventListener("click", increment)
	}
}

incBtn.addEventListener('click', increment)
console.log();