//header
$('.submenu_wrap').hide();
$('nav').mouseover(function () {
  $('.submenu_wrap').stop().slideDown();
  $('#header_wrap').addClass('active');
  $('.gnb li a').css({
    'color': '#000'
  });
  $("#logo_img").attr("src", "images/main/main_logo_color.svg");
  $("#top_icon1").attr("src", "images/main/top_my_color.svg");
  $("#top_icon2").attr("src", "images/main/top_cart_color.svg");
  $("#top_icon3").attr("src", "images/main/top_search_color.svg");
  
});
$('nav').mouseout(function () {
  $('.submenu_wrap').stop().slideUp();
  $('#header_wrap').removeClass('active');
  $('.gnb li a').css({
    'color': '#fff'
  });
  $("#logo_img").attr("src", "images/main/main_logo.svg");
  $("#top_icon1").attr("src", "images/main/top_my.svg");
  $("#top_icon2").attr("src", "images/main/top_cart.svg");
  $("#top_icon3").attr("src", "images/main/top_search.svg");

});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#header_wrap').addClass('header_scrolled');
    $('.gnb li a').css({
      'color': '#000'
    });
    $("#logo_img").attr("src", "images/main/main_logo_color.svg");
    $("#top_icon1").attr("src", "images/main/top_my_color.svg");
    $("#top_icon2").attr("src", "images/main/top_cart_color.svg");
    $("#top_icon3").attr("src", "images/main/top_search_color.svg");

    
  }
  else {
    $('#header_wrap').removeClass('header_scrolled');
    $('.gnb li a').css({
      'color': '#fff'
    });
    $("#logo_img").attr("src", "images/main/main_logo.svg");
    $("#top_icon1").attr("src", "images/main/top_my.svg");
    $("#top_icon2").attr("src", "images/main/top_cart.svg");
    $("#top_icon3").attr("src", "images/main/top_search.svg");

  }

});

$(window).scroll(function () {
  if ($(this).scrollTop() <= 100) {
    $('nav').mouseover(function () {
      $('.gnb li a').css({
        'color': '#000'
      });
      $("#logo_img").attr("src", "images/main/main_logo_color.svg");
      $("#top_icon1").attr("src", "images/main/top_my_color.svg");
      $("#top_icon2").attr("src", "images/main/top_cart_color.svg");
      $("#top_icon3").attr("src", "images/main/top_search_color.svg");
    });
    $('nav').mouseleave(function () {
      $('.gnb li a').css({
        'color': '#fff'
      });
      $("#logo_img").attr("src", "images/main/main_logo.svg");
      $("#top_icon1").attr("src", "images/main/top_my.svg");
      $("#top_icon2").attr("src", "images/main/top_cart.svg");
      $("#top_icon3").attr("src", "images/main/top_search.svg");
    });
  }
  else {
    $('nav').mouseover(function () {
      $('.gnb li a').css({
        'color': '#000'
      });
      $("#logo_img").attr("src", "images/main/main_logo_color.svg");
      $("#top_icon1").attr("src", "images/main/top_my_color.svg");
      $("#top_icon2").attr("src", "images/main/top_cart_color.svg");
      $("#top_icon3").attr("src", "images/main/top_search_color.svg");
    });

    $('nav').mouseleave(function () {
      $('.gnb li a').css({
        'color': '#000'
      });
      $("#logo_img").attr("src", "images/main/main_logo_color.svg");
      $("#top_icon1").attr("src", "images/main/top_my_color.svg");
      $("#top_icon2").attr("src", "images/main/top_cart_color.svg");
      $("#top_icon3").attr("src", "images/main/top_search_color.svg");
    });
  }
});

//instagram
$('.board2').hide();
$('.board3').hide();
$('.board4').hide();
$('.plus_btn').click(function () {
  var div = $('#container3');
  var currentHeight = div.height();
  var newHeight = currentHeight + 343;
  div.height(newHeight);

  if (currentHeight <= 362) {
    $('.board2').show();
  } else if (currentHeight <= 705) {
    $('.board3').show();
  }else if (currentHeight <= 1048) {
    $('.board4').show();
    $('.plus_btn').hide();

  }
});


//팝업창을 띄우면 body에 스크롤이 없어져라
$('#pop_up_wrap').hide();

$('.feed1, .feed2, .feed3, .feed4, .feed5, .feed6, .feed7, .feed8, .feed9, .feed10, .feed11, .feed12').click(function () {

  $('.pop_up_feed1, .pop_up_feed2, .pop_up_feed3, .pop_up_feed4, .pop_up_feed5, .pop_up_feed6, .pop_up_feed7, .pop_up_feed8, .pop_up_feed9, .pop_up_feed10, .pop_up_feed11, .pop_up_feed12').hide();

  var feedNumber = $(this).attr('class').match(/\d+/)[0];

  $('.pop_up_feed' + feedNumber).show();

  $('#pop_up_wrap').show();

  //스크롤 안되게 하기
  $('#pop_up_wrap').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
		});
});

$('.feed_close').click(function () {
  $('#pop_up_wrap').hide();
  $('body').removeClass('scroll_none')
  $('#pop_up_wrap').off('scroll touchmove mousewheel');
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

//마우스커서
var polyline = document.querySelector('.drawing_line_polyline');
var polyPoints = polyline.getAttribute('points');
var circle = document.querySelector('.drawing_line_circle');
var circleX = circle.getAttribute('cx');
var circleY = circle.getAttribute('cy');
var circleR = circle.getAttribute('r');

var total = 12;
var gap = 30;
var ease = 0.5;
var debounce_removeLine;
var debounce_counter = 0;

var pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  tx: 0,
  ty: 0,
  dist: 0,
  scale: 1,
  speed: 2,
  circRadius: 0,
  updateCrds: function () {
    if (this.x != 0) {
      this.dist = Math.abs((this.x - this.tx) + (this.y - this.ty));
      this.scale = Math.max(this.scale + ((100 - this.dist * 8) * 0.01 - this.scale) * 0.1, 0.25); // gt 0.25 = 4px
      this.tx += (this.x - this.tx) / this.speed;
      this.ty += (this.y - this.ty) / this.speed;
    }
  }
};

var points = [];

$(window).on('mousemove', function (e) {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  debounce_counter = 0;
  drawLine();

  // debounce
  clearTimeout(debounce_removeLine);
  debounce_removeLine = setTimeout(() => {
    //console.log('debounce_removeLine', new Date().getTime());
    debounce_counter = 12;
    drawLine();
  }, 80);
})

$(window).on('mousedown', function (e) {
  pointer.circRadius = 0;
  drawLine();
});

$(window).on('mouseup', function (e) {
  pointer.circRadius = 0;
  drawLine();
});

function drawLine() {
  pointer.updateCrds();

  points.push({
    x: pointer.tx,
    y: pointer.ty
  });
  while (points.length > total) {
    points.shift();
    if (points.length > gap) {
      for (var i = 0; i < 5; i++) {
        points.shift();
      }
    }
  }
  var pointsArr = points.map(point => `${point.x},${point.y}`);
  polyPoints = pointsArr.join(' ');
  polyline.setAttribute('points', polyPoints);

  // circle
  circleX = pointer.x;
  circleY = pointer.y;
  circleR = pointer.scale * pointer.circRadius;

  circle.setAttribute('cx', circleX);
  circle.setAttribute('cy', circleY);
  circle.setAttribute('r', circleR);

  if (debounce_counter > 0) {
    debounce_counter--;
    requestAnimationFrame(drawLine);
  }
}

//slide_search
$('#slide_search').hide();
$('#top_icon3').click(function(){
  $('#slide_search').fadeIn(200);
});
$('.close_btn, .slide_search_bg').click(function(){
  $('#slide_search').fadeOut(200);
});














