const bookControls = document.querySelector('.book__controls');
const buttons = Array.from(bookControls.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

bookControls.addEventListener('click', (event) => {
	event.preventDefault();

	const button = event.target.closest('.font-size');
	if (!button) return;

	buttons.forEach(button => button.classList.remove('font-size_active'));
	button.classList.add('font-size_active');
	book.classList.remove('book_fs-small', 'book_fs-big');

	const size = button.dataset.size;
	if (size === 'small') {
		book.classList.add('book_fs-small');
	} else if (size === 'big') {
		book.classList.add('book_fs-big');
	}
});