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
    body.classList.toggle('body--lock');
    this.classList.toggle('burger--active');
    if (menuList) {
      menuList.classList.toggle('menu__list--open');
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

    if (body.classList.contains('body--lock')) {
      modalOverlay.classList.remove('modal-overlay--visible');
      return false;
    } else {
      body.classList.remove('body--lock');
      modalOverlay.classList.remove('modal-overlay--visible');
    }

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
  });
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {

    if (body.classList.contains('body--lock')) {
      modalOverlay.classList.remove('modal-overlay--visible');
      return false;
    } else {
      body.classList.remove('body--lock');
      modalOverlay.classList.remove('modal-overlay--visible');
    }

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


let maxResize = false;
let minResize = false;

var f_windowWidth = function (w) {
  if (w <= n && !minResize) {
    maxResize = false;
    minResize = true;

    let header = document.querySelector('.header');
    let headerHeight = header.clientHeight;
    let menuList = document.querySelector('.menu__list');

    menuList.style.paddingTop = String(headerHeight + 'px');
  }

  if (w >= n && !maxResize) {
    maxResize = true;
    minResize = false;

    let menuList = document.querySelector('.menu__list');

    menuList.style.paddingTop = null;
  }
}

let n = 768,
  w = window.innerWidth;

f_windowWidth(w);

window.addEventListener('resize', function () {
  let w = window.innerWidth;
  f_windowWidth(w);
});

const inputFile = document.querySelectorAll('input[data-input="fyleImg"]');

inputFile.forEach(element => {

  element.onchange = () => {
    
    let elemParent = element.parentElement;
    let fileName = elemParent.getElementsByClassName('form__box-text');

    fileName[0].textContent = element.files[0].name;
  }
});
