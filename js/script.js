$(document).ready( () => {
    // to show the tooltip on the reservation button
    $('[data-toogle="tooltipReserve"]').tooltip();
    // to set an interval, pause and play the the carousel
    $("#mycarousel").carousel( { interval: 3000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
            return;
        }
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
    // for show the modal via js
    $("#btnLogin").click( () => {
        $('#loginModal').modal('show');
    });
    // we can also use 'data-toggle="modal" data-target="#signupModal"' in the button
    $("#btnSignup").click( () => {
        $('#signupModal').modal('toggle');
    });
})