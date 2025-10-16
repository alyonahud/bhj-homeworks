const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadCounter = 0;
let lostCounter = 0;

const getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i <= 9; i++) {
	let hole = getHole(i);

	hole.onclick = function() {
		if (hole.className.includes("hole_has-mole")) {
			deadCounter += 1;
			dead.textContent = deadCounter;
		} else {
			lostCounter += 1;
			lost.textContent = lostCounter;
		}

		if (deadCounter >= 10) {
			alert("Поздравляем! Вы победили");
			deadCounter = 0;
			dead.textContent = deadCounter;
			lostCounter = 0;
			lost.textContent = lostCounter;
		}

		if (lostCounter >= 5) {
			alert("Вы проиграли");
			deadCounter = 0;
			dead.textContent = deadCounter;
			lostCounter = 0;
			lost.textContent = lostCounter;
		}
	} 
}