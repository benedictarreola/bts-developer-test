import Swiper from 'swiper';
import './css/main.css'
import './product-item.js'

// Initialisation code
(() => {
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
  const Moonbase = window.Moonbase || {};
})();

// Swiper
const swiper = new Swiper('.swiper.swiper--product-item-gallery', {
  slidesPerView: 1.2,
  spaceBetween: 20,
});
