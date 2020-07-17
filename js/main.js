$(function(){

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__mini-inner'
  });
  $('.slider__mini-inner').slick({
    slidesToShow: 6,
    // slidesToScroll: 1,
    asNavFor: '.slider__inner',
    centerPadding: '0px',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
        }
      }
      
      
    ]
  });
 

  $('.menu__burger').click(function(event) {
    $('.menu__burger,.header__menu').toggleClass('active');
    
  });


});