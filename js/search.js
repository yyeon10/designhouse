$(function(){
//start
    
    function list() {
        $(this).addClass('on').siblings().removeClass('on');
    }

    $('.content_box .sub_menu li').on('click', list);
    $('.list_control ul li').on('click', list);
    
//end
})