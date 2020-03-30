console.log('Loaded! 😀'); // eslint-disable-line no-console

require('bootstrap');
require('slick-carousel');

$('img').popover({
    trigger: 'hover'
});

$('.clients-carousel').slick({
    infinite      : true,
    autoplay      : true,
    arrows        : false,
    dots          : false,
    swipe         : false,
    autoplaySpeed : 3000,
    slidesToShow  : 5,
    slidesToScroll: 5,
    responsive    : [
        {
            breakpoint: 1024,
            settings  : {
                slidesToShow  : 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 767,
            settings  : {
                slidesToShow  : 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 520,
            settings  : {
                slidesToShow  : 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 380,
            settings  : {
                slidesToShow  : 1,
                slidesToScroll: 1
            }
        }
    ]
});