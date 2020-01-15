//Burger Menu
$(document).ready(function () {
    // menu click event
    $('.menuBtn').click(function () {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.mainMenu').addClass('act');
        } else {
            $('.mainMenu').removeClass('act');
        }
    });

    $('.close').click(function (){
        $('.mainMenu').removeClass('act');
    });
//Scroll
$(function () {
    $('.toportfolio').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('#portfolio').offset().top
        }, 1000);
        e.preventDefault();
    });
});
$(function () {
    $('.tocontacts').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('#contacts').offset().top
        }, 1000);
        e.preventDefault();
    });
});
})
