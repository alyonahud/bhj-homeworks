const dropdowns = Array.from(document.querySelectorAll('.dropdown'));

dropdowns.forEach(dropdown => {
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');

  value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });
});

document.addEventListener('click', event => {
  const link = event.target.closest('.dropdown__link');

  if (link) {
    event.preventDefault();
    const dropdown = link.closest('.dropdown');
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');

    value.textContent = link.textContent;
    list.classList.remove('dropdown__list_active');
  }

  if (!event.target.closest('.dropdown')) {
    Array.from(document.querySelectorAll('.dropdown__list_active')).forEach(list => {
      list.classList.remove('dropdown__list_active');
    });
  }
});