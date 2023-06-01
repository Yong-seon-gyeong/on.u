//header
$('.submenu_wrap').hide();

//nav에 마우스를 올렸을때
$('nav').mouseover(function () {
  $('.submenu_wrap').stop().slideDown();

});
//nav에 마우스가 나갔을때
$('nav').mouseout(function () {
  $('.submenu_wrap').stop().slideUp();
});


//slide_search
$('#slide_search').hide();
$('#top_icon3').click(function(){
  $('#slide_search').fadeIn(200);
});
$('.close_btn, .slide_search_bg').click(function(){
  $('#slide_search').fadeOut(200);
});

//top^을 누르면 스크롤이 0이되라
$('.scroll_top_btn').hide();
$(window).scroll(function(){
    var height = $(window).scrollTop();
    if(height > 100){
        $('.scroll_top_btn').fadeIn(0)
    }else{
        $('.scroll_top_btn').fadeOut(0)
    }
});
$('.scroll_top_btn').click(function(){
    $('body,html').animate({
        scrollTop : 0
    },500);
});
