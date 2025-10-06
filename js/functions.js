$(window).scroll(function(){
    var wScroll = $(this). scrollTop();

    if(wScroll > $('.logo-grid').offset().top - ($(window).height() / 1)) {
        $('.logo-grid figure').each(function(i){
            setTimeout(function(){
            $('.logo-grid figure').eq(i).addClass('is-showing');
            }, 150 * (i+1));
        });
    }  




});