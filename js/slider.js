const nextSlideBtn = document.querySelector("#next");
const untilSlideBtn = document.querySelector("#until");
const slideWight = document.querySelector(".slider");

let position = 0;
let slideWidth = document.querySelector('.slide').offsetWidth;
const maxSlides = 3; // количество слайдов
const maxPosition = -slideWidth  * (maxSlides - 1);



nextSlideBtn.addEventListener("click", function() {
    slideWidth = document.querySelector('.slide').offsetWidth;
    if (position <= maxPosition) {
        position = 0;
    } else {
        position -=  slideWidth;
    }
    slideWight.style.transform = 'translateX(' + position + 'px)';
    console.log(slideWidth)
});

untilSlideBtn.addEventListener("click", function() {
    slideWidth = document.querySelector('.slide').offsetWidth;
    if (position === 0) {
        position = maxPosition;
    } else {
        position +=  slideWidth;
    }
    slideWight.style.transform = 'translateX(' + position + 'px)';
});
