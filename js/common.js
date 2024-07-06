(()=>{
    let swiper = new Swiper('.swiper', {
        direction: 'vertical',

        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        // centeredSlides: true,
    });

    $('.swiper-control .icn').on('click', function() {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    });

})();