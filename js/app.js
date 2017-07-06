var main = function () {
    $('.gallery1').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in',
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 3,
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
    });
    $('.content').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        cssEase: 'ease-in',
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });


};

$(document).ready(main);


