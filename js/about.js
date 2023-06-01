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
