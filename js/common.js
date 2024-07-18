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
            $('.has-menu').addClass('on');
            $('.ui-product .intro, .ui-product .toolbar').addClass('hidden').attr('aria-hidden', 'true');
            $('.ui-product .extend').addClass('hidden').attr('aria-hidden', 'false');
            console.log("되나?");
        } else if (currentScroll === 0) {
            // 스크롤 올리고 top이 0이 되면
            $('body').removeClass('overscroll');
            $('.has-menu').removeClass('on');
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

    /* accordion */
    $('.faq-list .answer').hide();
    $('.faq-list .question .icn').css('transform', 'rotate(0deg)');

    $('.faq-list .question').on('click', function() {
        let answer = $(this).next('.answer');
        if (answer.is(':visible')) {
            answer.slideUp();
            $(this).find('.icn').css('transform', 'rotate(0deg)');
            $(this).find('.title span').css('background-color', 'var(--text-color-01)');
        } else {
            $('.faq-list .answer').slideUp();
            $('.faq-list .question .icn').css('transform', 'rotate(0deg)');
            $('.faq-list .question .title span').css('background-color', 'var(--text-color-01)');
            answer.slideDown();
            $(this).find('.icn').css('transform', 'rotate(180deg)');
            $(this).find('.title span').css('background-color', 'var(--primary-color)');
        }
    });

    /*card flip*/
    $('.flip-card').on('click', function() {
        const card = $(this);

        if ($('.flip-card.flipped').length > 0 && !card.hasClass('flipped')) {
            return;
        }

        card.toggleClass('flipped');

        setTimeout(function() {
            if (card.hasClass('flipped')) {
                alert('꽝!');
            }
        }, 400); 
    });

    /* navigation */

    $('.btn-menu').on('click', function(event) {
        event.preventDefault();
        $('aside').addClass('is-opend');
        $('.drawer-wrap').addClass('is-opend');
        $('body').addClass('hidden');
    });

    $('.header-button').on('click', function(event) {
       event.preventDefault();
        $('aside').addClass('is-opend');
        $('.drawer-wrap').addClass('is-opend');
        $('body').addClass('hidden');
    });

    $('.btn-close').on('click', function(event) {
        event.preventDefault();
        $('aside').removeClass('is-opend');
        $('.drawer-wrap').removeClass('is-opend');
        $('body').removeClass('hidden');
    });

    /*back button*/
    $(document).ready(function() {
        $('#backButton').on('click', function() {
            window.history.back();
        });
    });

})();