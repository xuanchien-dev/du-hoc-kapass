(function ($) {
    "use strict";

    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"],
        });
        $(".cam-nhan_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            speed: 3000,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 3,
                },
                992: {
                    items: 3,
                },
            },
        });
    }

    // :: 2.0 Slick Active Code
    if ($.fn.slick) {
        $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: ".slider-nav",
        });
        $(".slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: ".slider-for",
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: "div",
            autoplay: true,
            centerMode: true,
            centerPadding: "30px",
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
        });
    }

    // :: 3.0 Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $("footer").footerReveal({
            shadow: true,
            shadowOpacity: 0.3,
            zIndex: -101,
        });
    }

    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<img src="./images/back-top.png" alt="" />',
        });
    }

    // :: 5.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $(".counter").counterUp({
            delay: 10,
            time: 2000,
        });
    }

    // :: 6.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $(".scoll").onePageNav({
            currentClass: "active",
            scrollSpeed: 2000,
            easing: "easeOutQuad",
        });
    }

    // :: 7.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $(".video_btn").magnificPopup({
            disableOn: 0,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
        });
    }

    $('a[href="#"]').click(function ($) {
        $.preventDefault();
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    // // :: 8.0 Sticky Active Code
    $window.on("scroll", function () {
        if ($window.scrollTop() > 48) {
            $(".header_area").addClass("sticky slideInDown");
        } else {
            $(".header_area").removeClass("sticky slideInDown");
        }
    });

    // :: 9.0 Preloader Active code
    $window.on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove();
        });
    });
})(jQuery);

/*js-dem gio*/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock("clockdiv", deadline);

/*js-chu chay*/

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
    .timeline({ loop: true })
    .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 200,
        delay: (el, i) => 150 * (i + 1),
    })
    .add({
        targets: ".ml3",
        opacity: 0,
        duration: 200,
        easing: "easeOutExpo",
        delay: 100,
    });
$(".nav-item").click(function(){
  $(".collapse.show").addClass("none");
});