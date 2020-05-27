$(function(){
//start
    
    function list(){
        $(this).addClass('on')
        .siblings().removeClass('on');
    }
    
    var idx = 0;
    
    $('.con_button span').on('click', list);
    $('.con_button span').on('click', function(){
        idx = $(this).index();
        $('.wrap_box ul').animate({
            marginLeft : -100*idx+'%'
        }, 700);
    });
    
    var inter;
    function loop(){
        inter = setInterval(function(){
            idx++;
            $('.wrap_box ul').animate({
                marginLeft : -100*idx+'%'
            }, 700);
            if(idx == 3) {
                setTimeout(function(){
                    $('.wrap_box ul').css('margin-left','0');
                },800)
                    idx = 0;
                }
            $('.con_button span').eq(idx).addClass('on')
                .siblings().removeClass('on');
        }, 3000)
    };
    loop();
    
    $('.con_button span').on('mouseenter', function(){
        clearInterval(inter);
    });
    
    $('.con_button span').on('mouseleave', function(){
        loop();
    });


    
//end
})