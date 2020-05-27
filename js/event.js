$(function () {
    //start
    function list() {
        $(this).addClass('on').siblings().removeClass('on');
    }
    var idx = 0
        , inter;

    function loop() {
        inter = setInterval(function () {
            idx++;
            if (idx == 3) {
                idx = 0;
            }
            $('.content_box figure ul li').eq(idx).addClass('on').siblings().removeClass('on');
            $('.con_button span').eq(idx).addClass('on').siblings().removeClass('on');
        }, 3000);
    }
    loop();
    $('.content_box figure ul').on('mouseenter', function () {
        clearInterval(inter);
    });
    $('.content_box figure ul').on('mouseleave', function () {
        loop();
    });
    
    $('.con_button span').on('click', list);
    $('.con_button span').on('click', function(){
        idx = $(this).index();
        $('.content_box figure ul li').eq(idx).addClass('on').siblings().removeClass('on');
    })
    
    $('.list_control ul li').on('click', list);
    
    $('.bottom_box .list ul li').on('click', function(){
        $(this).find('div').slideToggle();
        $(this).toggleClass('active')
        .siblings().removeClass('active');
        $('.bottom_box .list ul li').not(this).find('div').slideUp();
    })
    
    //end
})