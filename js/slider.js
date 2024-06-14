const nextSlideBtn = document.querySelector("#next");
const untilSlideBtn = document.querySelector("#until");
const slideWight = document.querySelector(".slider");

let position = 0;
let slideWidth = document.querySelector('.block-port.video').offsetWidth;
let maxPosition = 2 * -slideWidth;



nextSlideBtn.addEventListener("click", function() {
    slideWidth = document.querySelector('.block-port.video').offsetWidth;

    if (window.innerWidth <= 900){
        maxPosition = 5 * -slideWidth;
    } else {
        maxPosition = 2 * -slideWidth;
    }

    if (position <= maxPosition) {
        position = 0;
    } else {
        position -=  slideWidth;
    }
    slideWight.style.transform = 'translateX(' + position + 'px)';
    console.log(slideWidth)
});

untilSlideBtn.addEventListener("click", function() {
    slideWidth = document.querySelector('.block-port.video').offsetWidth;
    if (window.innerWidth <= 900){
        maxPosition = 5 * -slideWidth;
    } else {
        maxPosition = 2 * -slideWidth;
    }

    if (position === 0) {
        position = maxPosition;
    } else {
        position +=  slideWidth;
    }
    slideWight.style.transform = 'translateX(' + position + 'px)';
});
