$(document).ready(function() {
    //show btn to scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.toTop').fadeIn();
        }
        else {
            $('.toTop').fadeOut();
        }
    });
    //scroll to current position
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $(".slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 1000
    });
});
