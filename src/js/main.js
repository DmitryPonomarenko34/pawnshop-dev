import * as functions from './modules/functions.js';
import Swiper, {
  Navigation
} from 'swiper';

functions.isWebp();


const swiper = new Swiper('.swiper', {
  // Optional parameters
  // loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  modules: [Navigation, ],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

console.log('Джс работает!');