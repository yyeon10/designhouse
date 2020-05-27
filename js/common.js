$(function(){
//start
    
    function login(){
        alert('로그인 후 이용하실 수 있습니다.');
    };
    
    $('.header_nav a').eq(0).on('click', login);
    
//end
})