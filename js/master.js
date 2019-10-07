$('.js-search-button').click(function () {
  $(this).children().toggleClass('fa-times').toggleClass('fa-search')
  $(this).prev().toggle();
});

$('.js-carousel-product').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  prevArrow: $('.control-prev'),
  nextArrow: $('.control-next')
});

$('.js-review-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
  dots: true,
  appendDots: $('.js-review-control'),
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    return '<span class="custom-dots__item" role="button"></span>';
  }
});
