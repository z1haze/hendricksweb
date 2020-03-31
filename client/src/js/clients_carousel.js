require('slick-carousel');
require('imagesloaded').makeJQueryPlugin($);

module.exports = () => {
    const $slickClients = $('.clients-carousel');

    const activateClass = (slick) => {
        $(slick.$slider).addClass('slick--activated');
        setTimeout(() => {
            $(slick.$slider).removeClass('slick--activated');
        }, (parseInt(slick.defaults.autoplaySpeed) * 2) - 500 );
    };

    $slickClients.on('init beforeChange afterChange', (e, slick) => {
        activateClass(slick);
    });

    $slickClients.imagesLoaded(() => {
        $slickClients.slick({
            infinite      : true,
            autoplay      : true,
            arrows        : false,
            dots          : false,
            swipe         : false,
            waitForAnimate: false,
            autoplaySpeed : 3000,
            slidesToShow  : 5,
            slidesToScroll: 5,
            rows          : 0,
            speed         : 0,
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
    });
};