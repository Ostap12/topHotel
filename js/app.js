
var main = function () {
    $('.gallery1').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in',
        slidesToShow: 4,
       asNavFor: '.gallery2'
    });

    $('.gallery2').slick({
        dots: false,
        slidesToShow: 7,
        centerMode: true,
        centerPadding: '40px',
        asNavFor: '.gallery1',
        focusOnSelect: true,
        arrows: false,
        responsive: [{

            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }

        }]
    })
};

$(document).ready(main);


