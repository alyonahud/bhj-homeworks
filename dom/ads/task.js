const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function activateCase() {
	rotatorCases.forEach((e) => {
		e.classList.remove('rotator__case_active')
	})

	rotatorCases[currentIndex].classList.add('rotator__case_active')

	currentIndex++;

	if(currentIndex >= rotatorCases.length) {
		currentIndex = 0;
	}
}

setInterval(activateCase, 1000);