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
var map;
DG.then(function () {
    map = DG.map('map', {
        center: [56.829847, 60.610033], /* Координаты центра карты */
        zoom: 16, /* Масштаб */
        scrollWheelZoom: false /* Запрет прокрутки карты колесом мыши */
    });
    mapicon = DG.icon({
        iconUrl: './img/marker.png', /* Иконка маркера */
        iconAnchor: [32, 64],
        popupAnchor: [0, 24],
        className: 'map-icon',
        iconSize: [64, 64] /* Размер иконки */
    });
    DG.marker([56.829847, 60.610033], {icon: mapicon}).addTo(map).bindPopup('<div class="map-popup"><h2>Уральский Центр<br>НЛП технологий</h2><br/><br>+7 (343) 219-09-69<br>+7 (904) 38-28-308</div>');
});

