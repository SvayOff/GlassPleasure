$(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.testimonials-carrousel__content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: 1,
    ariableWidth: true
  });
  $('.feedbacks__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path path fill="#000000" d="M15.5 8l-7.5-7.5v4.5h-8v6h8v4.5z" ></path></svg ></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path fill="#000000" d="M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"></path></svg></button>',
  });

});


// accordeon
let tab = function () {
  let tabNav = document.querySelectorAll('.tabs__nav-item');
  let tabContent = document.querySelectorAll('.tabs__content-tab');
  let tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('is-active') :
        item.classList.remove('is-active');
    })
  }

};

tab();


// burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

burger.addEventListener('click', clickToggle);

function clickToggle(e) {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}

//drop-downs
let dropDowns = document.querySelectorAll('.header__drop-down.drop-down');
for (let i = 0; i < dropDowns.length; i++) {
  let dropDown = dropDowns[i];

  dropDown.addEventListener('click', dropClick);

  function dropClick(e) {
    dropDown.classList.toggle('active');
  }
}

