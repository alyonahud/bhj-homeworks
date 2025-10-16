const timer = document.getElementById("timer");
let endTime = 59;

function countDown() {
	if (endTime > 0) {
		endTime -= 1;
		timer.textContent = endTime;
	} else {
		clearInterval(intervalId);
		alert("Вы победили в конкурсе!");
	}
}

timer.textContent = endTime;
const intervalId = setInterval(countDown, 1000);