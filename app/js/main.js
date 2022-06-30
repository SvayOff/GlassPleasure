$(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: false,
    prevArrow: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
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

});
