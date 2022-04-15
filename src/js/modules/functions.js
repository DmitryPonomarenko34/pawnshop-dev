import 'simplebar';

export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

let burgerBtn = document.querySelector('.burger');
let menuList = document.querySelector('.menu__list');

if (burgerBtn) {
  burgerBtn.addEventListener('click', function () {
    this.classList.toggle('burger--active');
    if (menuList) {
      menuList.classList.toggle('menu__box--open');
    }
  })
}

const btns = document.querySelectorAll('.popup-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const closeBtn = document.querySelectorAll('.modal__close');
const body = document.querySelector('body');


closeBtn.forEach((el) => {
  el.addEventListener('click', () => {

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    body.classList.remove('body--lock');
    modalOverlay.classList.remove('modal-overlay--visible');
  });
});


btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    body.classList.add('body--lock');
  });
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    body.classList.remove('body--lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});


const tabBtns = document.querySelectorAll('.tab-btn');
const popupForms = document.querySelectorAll('.popup-form');

tabBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    tabBtns.forEach(function (item) {
      item.classList.remove('active');
    });

    e.currentTarget.classList.add('active');

    popupForms.forEach((el) => {
      el.classList.remove('active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('active');
  });
});