$(document).ready(function () {
    var openButton = $('.button-primary');
    var floor=$('.modal-counter');
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $('.modal');
    var closeButton = $('.modal-close-button')
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    floorPath.on("click", toggleModal);
    closeButton.on("click", toggleModal);
    openButton.on("click", toggleModal);

    function toggleModal() { 
        modal.toggleClass("is-open");
        floor.text(currentFloor)
     }
});
