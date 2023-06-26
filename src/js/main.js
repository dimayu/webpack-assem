import "../components/components";
import { header, burgerButton, menu, tabLinks, tabContent } from './elementsNodeList';
import { fixedHeader, mobileMenu, maskInput, tabs } from './helpers';

window.addEventListener('load', () => {
  
  // Функция для фиксированной шапки при скролле
  fixedHeader(header);
  
  // Mobile menu
  mobileMenu(burgerButton, menu);
  
  // Mask
  // maskInput('.phone-input');
  
  //tabs
  tabs(tabLinks, tabContent);
});
