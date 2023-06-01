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