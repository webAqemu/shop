$(function () {

	$('.slider__inner').slick({
                vertical: true,
                verticalSwiping: true,
                dots: true,
                infinity: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000,
                initialSlide: 1,
                arrows: false,
                responsive: [
                        {
                                breakpoint: 621,
                                settings: {
                                        swipe: false,
                                }
                        },
                      ]
        });

        $('.new__inner').slick({
                dots: true,
                infinity: true,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                        {
                                breakpoint: 1200,
                                settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                }
                        },
                        {
                                breakpoint: 900,
                                settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                }
                        },
                        {
                                breakpoint: 621,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        centerMode: true,
                                        centerPadding: '20px',
                                }
                        },
                      ]
        });

        $(".best__rate").rateYo({
                rating: 4.5,
                normalFill: '#e8ecf3',
                ratedFill: '#f55d44',
                numStars: 5,
                starWidth: "12px",
                readOnly: true,
                fullStar: true,
        });

        $('.header__burger').click(function(event){
                $('.header__burger, .header__menu').toggleClass('active')
        });

        $('.header__btn--search').click(function(event){
                $('.header__input-inner, .header__input').toggleClass('active')
        });
 
});