$(function(){
//start
    
    var idx = 0;
    
    function btn(){
        var img = $('.art_con figure img');
        if( idx <= 0 ){
            $('.art_con figure > span').eq(0).hide();
        } else {
            $('.art_con figure > span').eq(0).show();
        };

        if( idx == img.length-1 ){
            $('.art_con figure > span').eq(1).hide();
        } else {
            $('.art_con figure > span').eq(1).show();
        };
    };
    btn();
    
    function list(){
        $(this).addClass('on')
        .siblings().removeClass('on');
    }
    
    $('.art_con figure > span').eq(0).on('click', function(){
        idx--;
        btn();
        $('.art_con div').animate({
            marginLeft : -100*idx+'%'
        }, 700);
        $('.art_nav span').eq(idx).addClass('on')
        .siblings().removeClass('on');
        $('.art_con figure p').eq(idx).addClass('this on')
        .siblings().removeClass('this on');
    });
    
    $('.art_con figure > span').eq(1).on('click', function(){
        idx++;
        btn();
        $('.art_con div').animate({
            marginLeft : -100*idx+'%'
        }, 700);
        $('.art_nav span').eq(idx).addClass('on')
        .siblings().removeClass('on');
        $('.art_con figure p').eq(idx).addClass('this on')
        .siblings().removeClass('this on');
    });
    
    $('.art_nav span').on('click', list);
    $('.art_nav span').on('click', function(){
        idx = $(this).index();
        $('.art_con div').animate({
            marginLeft : -100*idx+'%'
        }, 700);
        btn()
    });
    
    $('.art_con figure').on('mouseenter', function(){
        $('.art_con figure .this').addClass('on')
        .siblings().removeClass('on');
    })
    
    $('.art_con figure').on('mouseleave', function(){
        $('.art_con figure .this').removeClass('on');
    })
    
//end
})