$('.slider__slickWrap').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dotsClass: 'slider__dots',
    autoplay: true,
    autoplaySpeed: 5000
});

var popUpForm = $('.form_callBack');


agre = new AgreAddCompInfo('', '');
agre.addInnOgrn('');
agre.addAdres('');
var checkbox;

jQuery('.form_chek').on('click', function () {
    var id = jQuery(this).data('id');
    agre.render(id);
    checkbox = id;
});

jQuery('.form').on('click','.btn_agre', function (e) {
    e.preventDefault();
    var id = jQuery(this).attr('id');
    var check;
    if (id === 'agre_ok'){
        check = true;
    }else if (id === 'agre_no'){
        check = false;
    }
    jQuery(checkbox+' '+'.form_chek').prop('checked', check);
    jQuery('#agre').remove()
});

jQuery('.callBack').on('click', function () {
    popUpForm.css('display', 'flex');
    jQuery('.page').addClass('panel-open').css('overflow', 'hidden');
});
jQuery('.close').on('click', function () {
    popUpForm.css('display', 'none');
    jQuery('.page').removeClass('panel-open').css('overflow', 'auto')
});

$(document).on('click', function (event) {
    if ($(event.target).closest(".noneClose").length
        ||$(event.target).closest("#mess_block").length
        ||!$(event.target).hasClass('panel-open')){
        return;
    }
    $('.close').trigger('click');
    $('#ok').trigger('click');
    event.stopPropagation();
});

$('.header').stickMe({
    animate: true,
    transitionStyle: 'fade',
    triggerAtCenter: false,
    nonStick: true,
    nonStickWidth: '737'
});


//
// <!-- Yandex.Metrika counter -->
(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter48118022 = new Ya.Metrika({ id:48118022, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");
