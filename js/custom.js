$(window).scroll(function () {
    var sticky = $('.header')
        , scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(document).ready(function () {


    $('.product_slider').slick({
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                }
            }
        ]
    });
    $('.v2-slider-portfolio').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});