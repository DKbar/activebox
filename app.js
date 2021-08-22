$(function () {

    let header = $("#header");
    let intro = $("#intro");
    let nav = $("#nav");
    let introH = intro.innerHeight(); /* высота элемента c учетом paddind, height - без учета */
    let scrollPos = $(window).scrollTop(); /* позиция скролла от верха */
    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH)
    })

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }



    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top; /* отступ */

        nav.removeClass("show")

        $("html, body").animate({
            scrollTop: elementOffset - 70  //анимированный преход к элементу
        }, 700)                             //скорость анимации в м.сек
    })




    $("#navToggle").on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show")
    })

    /* https://kenwheeler.github.io/slick/ */
    let slider = $("#testimonialsSlider")

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,  /* затемнять отзывы */
        arrows: false, /* убрать кнопки */
        dots: true,

    });



});