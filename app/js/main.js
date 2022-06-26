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
});
