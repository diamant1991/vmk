// Place any jQuery/helper plugins in here.
$(document).ready(function(){
    $('.faq .top').click(function(){
     	$(this).closest('.faq').removeClass('closed');
     	$(this).closest('.faq').addClass('opened');
     	$('.opened .hidden').slideDown();
    });
    $('.catalog .item.notab').hover(function(){
    	$('.hidden', this).slideDown(100);
    },function(){
    	$('.hidden', this).slideUp(100);
    });
    $('.product .preview img').click(function(){
        $('.product .preview img.active').removeClass('active');
        $(this).addClass('active');
        $('.product .main').attr('src', $(this).attr('src'));
    });
    $('.vid.table').click(function(){
        $('.notab').addClass('tab');
        $('.tab').removeClass('notab');
    });
    $('.vid.grid').click(function(){
        $('.tab').addClass('notab');
        $('.notab').removeClass('tab');
    });
});


