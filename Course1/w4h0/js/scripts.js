const pauseUnpauseButton = function() {
    const buttonIcon = $("#carouselButton").children("span");
    if (buttonIcon.hasClass("fa-pause")) {
        $("#my-carousel").carousel("pause");
        buttonIcon.removeClass("fa-pause");
        buttonIcon.addClass("fa-play");
    } else {
        $("#my-carousel").carousel("cycle");
        buttonIcon.removeClass("fa-play");
        buttonIcon.addClass("fa-pause");
    }
}

$(document).ready(function() {
    $("#my-carousel").carousel({interval: 4000});
    $("#carouselButton").click(pauseUnpauseButton);
});