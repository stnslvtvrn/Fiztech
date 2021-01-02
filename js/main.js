
$(function () {
    $('.docs__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<img src='/../img/prev.png' class='prev' alt='1'>",
        nextArrow: "<img src='/../img/next.png' class='next' alt='2'>",
    });
    $("#nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);

    });

});

