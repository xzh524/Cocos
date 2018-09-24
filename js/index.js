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
    //导航栏吸顶效果
	var nav = document.getElementById("head");
    window.onscroll = function(){
        var bd = document.documentElement || document.body;
        nav.style.top = 30-bd.scrollTop + "px";
        if (bd.scrollTop>=700) {
            nav.style.top = "0px";
            nav.style.opacity = '1';
            nav.style.zIndex = '100'
        }else if(bd.scrollTop<=700){
            // nav.style.top = "30px";
            nav.style.opacity = '0';
            nav.style.zIndex = '-100'
        }
    }
    $('.nav li a').on('mousemove',function(){
        $('.nav li a').removeClass('current');
        $(this).addClass('current');
    })
})