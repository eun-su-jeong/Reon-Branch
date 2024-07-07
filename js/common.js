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
        } else if (currentScroll === 0) {
            // 스크롤 올리고 top이 0이 되면
            $('body').removeClass('overscroll');
            $('.ui-product .intro, .ui-product .toolbar').removeClass('hidden').attr('aria-hidden', 'false');
            $('.ui-product .extend').removeClass('hidden').attr('aria-hidden', 'true');
        }
        lastScrollTop = currentScroll;
    });


    /* card visible */
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

    /* tab */
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            if (entry.isIntersecting) {
                $('.tabs li').removeClass('on');
                $('a[href="#' + id + '"]').parent().addClass('on');
            }
        });
    }, observerOptions);

    $('.card').each(function() {
        observer.observe(this);
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() === 0) {
            $('.tabs li').removeClass('on');
            $('.tabs li:first-child').addClass('on');
        }
    });

    /* tab click */
    $('.tabs a').on('click', function(e) {
        e.preventDefault();
        const id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

})();