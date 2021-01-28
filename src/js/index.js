
$(document).ready(function () {
    AOS.init({
        offset: 15,
        disable: 'mobile'
    });

    $('.form__field').focus(function () {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    $('.study__line-after').css('width', function() {
        return $(this).parent('.study__line').children().children('span').text() + '%';
    })

    $('.nano__btn').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('.js-section_face').offset().top }, 1000);
        e.preventDefault();
    });

    Start();

    function Start() {
        var m = 22,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__time-count:nth-of-type(2) span:first-child').text(m);
            $('.form__time-count:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    }

    $('.js-commits__box').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 40,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            1280 : {
                items: 3
            }
        }
    });
    if ( $('.js-demoAnimate span').length > 0) {
        let lengthTitle = $('.js-demoAnimate span').text().trim();
        addDelayAnimate (lengthTitle);
        
    } else {
        let lengthTitle = $('.js-demoAnimate').text().trim();
        addDelayAnimate (lengthTitle);
    }

    function addDelayAnimate (lengthTitle) {
        let result = '';
        let j = 0;
        for (let i = 0; i < lengthTitle.length; i++) {
            j += 0.1;
            result += '<span style="animation-delay: ' + j + 's">' + lengthTitle[i] + '</span>';
            $('.js-demoAnimate').html(result);
        }
    }
});