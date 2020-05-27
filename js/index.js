/*window.addEventListener('DOMContentLoaded', function(){
    
    var wrap = document.querySelector('.wrap'), shareBtn = wrap.querySelector('.share_btn'), shareBox = wrap.querySelector('.share_box'), closeBtn = wrap.querySelector('.close_btn');
    
    shareBtn.addEventListener('click', function(){
        shareBtn.classList.toggle('off');
        shareBox.classList.toggle('on');
    });
    
    closeBtn.addEventListener('click', function(){
        shareBtn.classList.remove('off');
        shareBox.classList.remove('on');
    });
    
    
    
})*/

$(function(){
//start
    
    function list(){
        $(this).addClass('on')
        .siblings().removeClass('on');
    }
    
    function login(){
        alert('로그인 후 이용하실 수 있습니다.');
    }
    
    $('.visual_box > span').on('click', function(){
        $('.share_box').addClass('on');
        $('.visual_box > span').addClass('off');
    });
    
    $('.share_box span').on('click', function(){
        $('.share_box').removeClass('on');
        $('.visual_box > span').removeClass('off');
    });
    
    $('.sub_menu li').on('click', list);
    
    $('.cl_list > ul li').on('click', list);

    var idx = 0;
    
    $('.cl_list > ul li').on('click', function(){
        idx = $(this).index();
        var imgSrc = 'img/bg_class_' + idx + '.jpg'
        $('.list_con li').eq(idx).addClass('on')
        .siblings().removeClass('on');
        $('.cl_list figure img').attr('src',imgSrc);
    })

    $('.vis_button span').on('click', list);
    $('.vis_button span').on('click', function(){
        idx = $(this).index();
        $('.visual_box ul').animate({
            left : -100*idx+'%'
        }, 700);
    });
    
    var inter;
    function loop(){
        inter = setInterval(function(){
            idx++;
            $('.visual_box ul').animate({
                left : -100*idx+'%'
            }, 700)
            if(idx == 4) {
                setTimeout(function(){
                    $('.visual_box ul').css('left','0');
                },800)
                    idx = 0
            }
            $('.vis_button span').eq(idx).addClass('on')
            .siblings().removeClass('on');
        }, 3000)
    };
    loop();
        
    $('.visual_box ul').on('mouseenter', function(){
        clearInterval(inter);
    });
        
    $('.visual_box ul').on('mouseleave', function(){
        loop();
    });
    
    $('.content_box .sub_menu li a').on('click', login);
//end
})




