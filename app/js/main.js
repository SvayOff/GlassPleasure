
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
