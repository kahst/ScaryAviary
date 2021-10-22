$(document).ready(function(){
    $('.modal').on('shown.bs.modal', function () {
        var video_id = "#" + $(this).attr("id") + "_video";
        $(video_id)[0].play();
    });
    $('.modal').on('hidden.bs.modal', function () {
        var video_id = "#" + $(this).attr("id") + "_video";
        $(video_id)[0].pause();
    });
});
