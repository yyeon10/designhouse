$(function(){
//start
    
    function list() {
        $(this).addClass('on').siblings().removeClass('on');
    }
    
    $('.bottom_box .list ul li').on('click', function(){
        $(this).find('div').slideToggle();
        $(this).toggleClass('active')
        .siblings().removeClass('active');
        $('.bottom_box .list ul li').not(this).find('div').slideUp();
    })
    
    $('.content_box .sub_menu li').on('click', list);
    $('.list_control ul li').on('click', list);
    
    
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();

        var data = [{
            
        }];
    
    function searchDate() {
        $('.con_list div em').text(year + '년 ' + month + '월 ' + date + '일의 검색 결과');
        $('.con_list div small').text('총 ' + $('.con_list > ul > li').length + '건');
    };
    
    searchDate();

    
        $('#calBox').calendar({
            trigger: '#dt',
            width: 320,
            height: 320,
            // offset: [0, 1],
            zIndex: 999,
            data: data,
            onSelected: function (view, date, data) {
                console.log('event: onSelected')
            },
            onClose: function (view, date, data) {
                console.log('event: onClose')
                console.log('view:' + view)
                console.log('date:' + date)
            }
        });
        $('#dt').click(function(){
            var x = $('.aa').position().left - 270 ;
            var y = $('.aa').position().top;
            setTimeout(function(){
                $('#calBox').css({
                    left:x, top:y + 80
                })
            },10)
        });

    
//end
})