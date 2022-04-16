import * as functions from './modules/functions.js';
import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

functions.isWebp();


const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    412: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    631: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1201: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }


});

