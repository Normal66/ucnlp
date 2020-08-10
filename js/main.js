$('body').append('<div class="upbtn"></div>');
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
    } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++) {
    $(".mobile ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}
