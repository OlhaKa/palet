
$(document).ready(function () {

    $('.header__burger').click(function() {
        $(this).toggleClass('active');
        $('.header__navWrap').stop().slideToggle(400,
            function () {
                if ($(this).css("display") === "none") {
                    $(this).removeAttr("style");
                }
            });
    });

    // ==========HOME PAGE============

    if ($(".home").length){
        var a = 0;
        $(window).scroll(function() {
            var oTop = $('.number__item__border').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },
                        {
                            duration: 2500,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                });
                a = 1;
            }
        });
    }

    // ==========HOME PAGE end============



    function activateMap(map, frame) {
        $(map).click(function () {
            $(frame).css("pointer-events", "auto");
        });
    }
    activateMap('.map-wrap', '.map-wrap iframe');
    activateMap('.contacts-map-wrap', '.contacts-map-wrap iframe');


    function disableMap(map, frame) {
        $(map).mouseleave(function() {
            $(frame).css("pointer-events", "none");
        });
    }

    disableMap(".map-wrap", '.map-wrap iframe');
    disableMap(".contacts-map-wrap", '.contacts-map-wrap iframe');


    hoverEffect($('.scheme-card:nth-child(1)'), $('.scheme-card:nth-child(2)'));
    hoverEffect($('.scheme-card:nth-child(2)'), $('.scheme-card:nth-child(4)'));
    hoverEffect($('.scheme-card:nth-child(3)'), $('.scheme-card:nth-child(1)'));
    hoverEffect($('.scheme-card:nth-child(4)'), $('.scheme-card:nth-child(3)'));
    function hoverEffect(card, next) {
        $(card).hover(function () {
            $(next).toggleClass('next')
        })
    }

});

