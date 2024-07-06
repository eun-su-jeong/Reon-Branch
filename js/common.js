(()=>{
    /* swiper */
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

    /* scroll */
    let lastScrollTop = 0;
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
        if (currentScroll > lastScrollTop) {
            // 스크롤 다운
            $('body').addClass('overscroll');
            $('.ui-product .intro, .ui-product .toolbar').addClass('hidden').attr('aria-hidden', 'true');
            $('.ui-product .extend').addClass('hidden').attr('aria-hidden', 'false');
        } else {
            // 스크롤 업
            $('body').removeClass('overscroll');
            $('.ui-product .intro, .ui-product .toolbar').removeClass('hidden').attr('aria-hidden', 'false');
            $('.ui-product .extend').removeClass('hidden').attr('aria-hidden', 'true');
        }
        lastScrollTop = currentScroll;
    });

    /* card */
    function onScroll() {
        $('.card-cont').each(function() {
            let elementTop = $(this).offset().top;
            let viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', onScroll);
    onScroll();

})();