$(document).ready(function(){
    // autoplay on video modals
    $('.modal.sa-video').on('shown.bs.modal', function () {
        var video_id = "#" + $(this).attr("id") + "_video";
        $(video_id)[0].play();
    });
    $('.modal.sa-video').on('hidden.bs.modal', function () {
        var video_id = "#" + $(this).attr("id") + "_video";
        $(video_id)[0].pause();
    });

    // navbar scroll functions
    $(window).scroll(function(e) {
        // add/remove class to navbar when scrolling to hide/show
        $('.main-navbar')[$(window).scrollTop() >= 150 ? 'addClass' : 'removeClass']('navbar-hide');
    });
});
