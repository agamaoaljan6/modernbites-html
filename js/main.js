$(document).ready(function () {
    $(window).scroll(function(){
        if($(document).scrollTop()>150) {
            $('header').addClass('fixed-top').addClass('sticky');
        }else {
            $('header').removeClass('fixed-top').removeClass('sticky');
        }
    })
})

