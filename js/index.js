$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        effect : 'slide',
        speed:1000,
        centeredSlides: true,
        loop : true,
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        mousewheelControl : false,
    }) 
    var mySwiper = new Swiper('.myswiper',{
        effect : 'coverflow',
        slidesPerView: 2.5,
        speed:500,
        centeredSlides: true,
        loop : true,
        loopAdditionalSlides : 5,
        mousewheelControl : false,
        nextButton:'.swiper-button-right',
        prevButton:'.swiper-button-left',
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        coverflowEffect: {
            rotate: 0,
            stretch:0,
            depth: 200,
            modifier: 1,
            slideShadows : false
        }
    })
})