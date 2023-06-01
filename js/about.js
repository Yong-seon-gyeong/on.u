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

$('.map2').hide();
$('.map3').hide();
$('.map1_btn').click(function(){
    $('.map1').show();
    $('.map2, .map3').hide();
});
$('.map2_btn').click(function(){
    $('.map2').show();
    $('.map1, .map3').hide();
});
$('.map3_btn').click(function(){
    $('.map3').show();
    $('.map1, .map2').hide();
});
