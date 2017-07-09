
var main = function () {
    $(function () {
        var dialog, form,

            emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            name = $("#name"),
            email = $("#email"),
            phone = $("#phone"),
            allFields = $([]).add(name).add(email).add(phone),
            tips = $(".validateTips");

        function updateTips(t) {
            tips
                .text(t)
                .addClass("ui-state-highlight");
            setTimeout(function () {
                tips.removeClass("ui-state-highlight", 1500);
            }, 500);
        }

        function checkLength(o, n, min, max) {
            if (o.val().length > max || o.val().length < min) {
                o.addClass("ui-state-error");
                updateTips("Довжинна " + n + " повинна бути між " +
                    min + " і " + max + ".");
                return false;
            } else {
                return true;
            }
        }

        function checkRegexp(o, regexp, n) {
            if (!( regexp.test(o.val()) )) {
                o.addClass("ui-state-error");
                updateTips(n);
                return false;
            } else {
                return true;
            }
        }

        function addUser() {
            var valid = true;
            allFields.removeClass("ui-state-error");

            valid = valid && checkLength(name, "username", 3, 16);
            valid = valid && checkLength(email, "email", 6, 80);
            valid = valid && checkLength(phone, "phone", 10, 10);

            valid = valid && checkRegexp(name, /^[a-zа-я]([0-9a-zа-я_\s])+$/i, "Мінімальна довжина імені - 3 символи");
            valid = valid && checkRegexp(email, emailRegex, "приклад: ostap@tophotel.com");
            valid = valid && checkRegexp(phone, /^([0-9])+$/, "Тільки цифри");

            if (valid) {
                $("#users tbody").append("<tr>" +
                    "<td>" + name.val() + "</td>" +
                    "<td>" + email.val() + "</td>" +
                    "</tr>");
                dialog.dialog("close");
            }
            alert("Успішно заброньовано");
            return valid;
        }

        dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                "Забронювати": addUser,
                Скаcувати: function () {
                    dialog.dialog("close");
                }
            },
            close: function () {
                form[0].reset();
                allFields.removeClass("ui-state-error");
            }
        });

        form = dialog.find("form").on("submit", function (event) {
            event.preventDefault();
            addUser();
        });

        $("#book").button().on("click", function () {
            dialog.dialog("open");
        });
    });

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
        autoplaySpeed: 4000,
        speed: 1000,
        cssEase: 'ease-in',
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });







};

$(document).ready(main);


