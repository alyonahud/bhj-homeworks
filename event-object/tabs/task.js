const allTabsContainers = document.querySelectorAll('.tabs');

allTabsContainers.forEach(tabsContainer => {
  const tabButtons = Array.from(tabsContainer.querySelectorAll('.tab'));
  const tabContents = tabsContainer.querySelectorAll('.tab__content');

  tabsContainer.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('.tab');
    if (!clickedTab) return;

    const clickedIndex = tabButtons.indexOf(clickedTab);

    tabButtons.forEach(tabButton => tabButton.classList.remove('tab_active'));
    tabContents.forEach(tabContent => tabContent.classList.remove('tab__content_active'));

    clickedTab.classList.add('tab_active');
    tabContents[clickedIndex].classList.add('tab__content_active');
  });
});