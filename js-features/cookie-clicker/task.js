const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let clickAmount = 0;

cookie.onclick = function() {
	clickAmount += 1;
	clicker.textContent = clickAmount;
	if (clickAmount % 2) {
		cookie.width *= 1.15;
		cookie.height *= 1.15;
	} else {
		cookie.width /= 1.15;
		cookie.height /= 1.15;
	}
}