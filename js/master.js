$('.js-search-button').click(function () {
  $(this).children().toggleClass('fa-times').toggleClass('fa-search');
  $(this).prev().toggle();
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

function switchTab(nextTab){
  var idNextTab = $(nextTab).attr('data-tab');
  $('.js-tab [data-tab]').removeClass('tab__active');
  $(nextTab).addClass('tab__active');
  $('.carousel-product__main').hide();
  $(`#${idNextTab}`).show();

  $(`#${idNextTab} .js-carousel-product`).slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    nextArrow: $(`#${idNextTab} .control-next`),
    prevArrow: $(`#${idNextTab} .control-prev`)
  });
}

$('.js-tab [data-tab]').click(function (e) {
  var idCurrentTab = $('.js-tab .tab__active').attr('data-tab');
  console.log(idCurrentTab);
  $(`#${idCurrentTab} .js-carousel-product`).slick('unslick');
  e.preventDefault();
  switchTab(this);
});

switchTab($('.js-tab [data-tab="best-selling-product"]'));
