$(document).ready(function(){
  var count = $('.slider > li').size();
  var i=0;
  var x=0;
  var y=0;
  var time=7000;
  while (i < count) {
    i++;
    $('.counter').append('<div />');
  }
  var w1=$('.counter').css('width');
  var w1=parseInt(w1);
  var w2=$('.slider .inwards .slider').css('width');
  var w2=parseInt(w2);
  var w3=w2-w1;
  var w4=w3*0.5;
  $('.counter').css('margin-left',w4);
  $('.slider > li').eq(x).fadeIn('slow');
  $('.counter div').eq(x).addClass('active');
  $('.counter div').click(function(){
    i=0;
    while (i < count) {
    $('.counter div').eq(i).removeClass('active');
    i++;
    $('.slider > li').eq(y).fadeOut('slow');
    }
    y = $(this).index();
    $('.slider > li').eq(y).fadeIn('slow');
    $('.counter div').eq(y).addClass('active');
    clearInterval(myTimer);
    myTimer = setInterval(function seoswitch(){
    $('.counter div').eq(y).removeClass('active');
    y++;
    if(y>=count){
      y=0;
    }
    $('.slider > li').eq(y-1).fadeOut('slow');
    $('.slider > li').eq(y).fadeIn('slow');
    $('.counter div').eq(y).addClass('active');
    }
    ,5000);
  });
  var myTimer = setInterval(function seoswitch(){
    $('.counter div').eq(y).removeClass('active');
    y++;
    if(y>=count){
    y=0;
    }
    $('.slider > li').eq(y-1).fadeOut('slow');
    $('.slider > li').eq(y).fadeIn('slow');
    $('.counter div').eq(y).addClass('active');           
  }
  ,5000);



  $('.arrow-right').click(function(){
    var z = $('.counter .active').index();
    $('.counter div').eq(z).removeClass('active');
    $('.slider > li').eq(z).fadeOut('slow');
    console.log(z);
    console.log(count-1);
    if(z>=count-1){
      z=-1;
    }
    $('.counter div').eq(z+1).addClass('active');
    $('.slider > li').eq(z+1).fadeIn('slow');
    clearInterval(myTimer);

    
  });

  $('.arrow-left').click(function(){
    var i = $('.counter .active').index();
    $('.counter div').eq(i).removeClass('active');
    $('.slider > li').eq(i).fadeOut('slow');
    $('.counter div').eq(i-1).addClass('active');
    $('.slider > li').eq(i-1).fadeIn('slow');
    clearInterval(myTimer);
    
    
  });

  





});