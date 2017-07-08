
var main = function () {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true
        }

    });

    $('#open-popup').magnificPopup({
        items: [
            {
                src: '../img/1.jpg',
                title: 'Top Hotel Kyiv'
            },
            {
                src: '../img/2.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/3.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/4.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/5.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/6.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/7.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/8.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/pool.jpg',
                title: 'Top Hotel Pool'
            },
            {
                src: '../img/st2.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/spa1.jpg',
                title: 'Top Hotel Spa'
            },
            {
                src: '../img/prem1.jpg',
                title: 'Top Hotel Rooms'
            },
            {
                src: '../img/pool1.jpg',
                title: 'Top Hotel Pool'
            },
            {
                src: '../img/half.jpg',
                title: 'Top Hotel Rooms'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });
};

$(document).ready(main);