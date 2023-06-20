import { header, burgerButton, menu, } from './elementsNodeList';
import { fixedHeader, mobileMenu, maskInput } from './helpers';

window.addEventListener('load', () => {
  
  // Функция для фиксированной шапки при скролле
  fixedHeader(header);
  
  // Mobile menu
  mobileMenu(burgerButton, menu);
  
  //Mask
  // maskInput('.phone-input');
});
