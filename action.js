$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('.ini').addClass('active');
        } else {
            $('.navbar').removeClass('active');
            $('.ini').removeClass('active');
        }
    });
});