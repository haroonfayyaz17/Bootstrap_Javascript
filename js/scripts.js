$(document).ready(function() {
    $("#mycarousel").carousel({
        interval: 1
    });
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $('#btnLogin').click(function() {
        console.log('yes');
        $('#btnLogin').attr('data-toggle', 'modal');
        $('#btnLogin').attr('data-target', '#loginModal');
    });
    $('#btnReserve').click(function() {
        console.log('yes');
        $('#btnReserve').attr('data-toggle', 'modal');
        $('#btnReserve').attr('data-target', '#reserveModal');
    });
});