$(document).ready(function(){
	$('main').css('opacity',0).animate({ opacity:1 },600,'linear');
    $('.menu').click(function() {
        $('nav ul').slideToggle();
    });

    $(window).resize(function() {
        var windowWidth = $(window).width();
        if ( windowWidth > 970 ) {
            $('nav ul').css('display','flex');
        } else {
            $('nav ul').slideUp(0);
        }
    });

$('.mawwiage').bind('mouseover focus', function() {
        if ( $('audio')[0].ended ) {
            $('.mawwiage').removeClass('pause').addClass('play');
        } else if ( $('audio')[0].paused ) {
            $('.mawwiage').removeClass('pause').addClass('play');
        } else {
            $('.mawwiage').removeClass('play').addClass('pause');
        }
    });

    $('.mawwiage').click(function() {
        if ( $('audio')[0].paused ) {
            $('audio')[0].play();
            $('.mawwiage').removeClass('play').addClass('pause');
        } else {
            $('audio')[0].pause();
            $('audio')[0].currentTime=0;
            $('.mawwiage').removeClass('pause').addClass('play');
        }
    });

    $('#copyright').text((new Date()).getFullYear());
 });
   

         