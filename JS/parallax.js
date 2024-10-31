$(document).ready(function () {
    var windowWidth = $(window).width();
    
    $(window).scroll(function () {
        
        if (windowWidth > 800) {
            var scrollTop = $(window).scrollTop();

            $('header .texts').css({
                'transform': 'translate(0px,' + (scrollTop / 2) + '%)'
            });

            $('.about  article').css({
                'transform': 'translate(0px, -' + (scrollTop / 4) + '%)'
            });
        }
    });

    $(window).resize(function(){
        if  (windowWidth < 800) {
            $('.about  article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });

});