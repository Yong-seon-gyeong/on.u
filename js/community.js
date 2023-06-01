$(function(){
	$(".question").click(function(){
		$(this).next().slideToggle();
	});
});

$(function(){
	$(".question").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});
