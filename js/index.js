let loadSite = document.querySelector("#loadSite");
let loaderSpin = document.querySelector("#loaderSpin");
window.addEventListener("load", () => {
    loadSite.classList.add('active');
    loaderSpin.classList.remove('active');
    window.scrollTo({
        top: 0,
    });
});

let scrollTop = document.querySelector('.head');
let addHomeBtn = document.querySelector('#homesBtn');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 100){
        addHomeBtn.classList.remove('hiden');
        addHomeBtn.classList.add('active');
        scrollTop.classList.add('active');
    }
    else {
        addHomeBtn.classList.add('hiden');
        addHomeBtn.classList.remove('active');
        scrollTop.classList.remove('active');
    };
});

let menuHead = document.querySelector('#menuHead');
let menuBody = document.querySelector('.menu');
let menuClose = document.querySelector('#menuClose');
let hidenBody = document.querySelector('#loadSite');

menuHead.addEventListener('click', () => {
    menuBody.classList.add('active');
    hidenBody.classList.add('hiden');
});

menuClose.addEventListener('click', () => {
    menuBody.classList.remove('active');
    hidenBody.classList.remove('hiden')
});


