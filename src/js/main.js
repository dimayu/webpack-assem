import { firstScreen, header, burgerButton, menu } from './elementsNodeList';

window.addEventListener('load', () => {
  
  // Функция для фиксированной шапки при скролле
  function headerFixed() {
    const headerStickyObserver = new IntersectionObserver(([entry]) => {
      header.classList.toggle('sticky', !entry.isIntersecting);
    });
    
    if (firstScreen) {
      headerStickyObserver.observe(firstScreen);
    }
  }
  headerFixed();
  
  burgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    burgerButton.classList.toggle("active");
    menu.classList.toggle("active")
  });
});
