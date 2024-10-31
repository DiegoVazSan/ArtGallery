$(document).ready(function() {

    const viewPortWidth = $(window).width();

    function showMenu() {
        $('.navigationMenu a').each(function(index, elemento){
            $(this).css({
                'top': '-200px'
            });
            $(this).animate({
                'top': '0' 
            }, 1000 + (index * 500));
        });
    }

    function showTitle(){
        if( viewPortWidth > 800 ) {
            $('header .texts').css({
                opacity: 0,
                marginTop: 0
            });
            $('header .texts').animate({
                opacity: 1,
                marginTop: '-52px'
            }, 1600);
        }
    }

    var aboutPosition = $('#aboutID').offset().top,
        productTitlePosition = $('#productsTitleID').offset().top,
        galleryPosition = $('#galleryID').offset().top,
        locationPosition = $('#locationID').offset().top;

    $('#btnAbout').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: aboutPosition - 200
        }, 500);
    });

    $('#btnProducts').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: productTitlePosition
        }, 500);
    });

    $('#btnGallery').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galleryPosition
        }, 1000);
    });

    $('#btnLocation').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: locationPosition
        }, 1000);
    });

    showTitle();
    showMenu();
    
    

});