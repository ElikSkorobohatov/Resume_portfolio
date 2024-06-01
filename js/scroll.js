function smoothScroll(target) {
    let targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

function smoothScrollMenu(target) {
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('#loadSite').classList.remove('hiden')
    let targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

let scrollToAbout = document.querySelector('#aboutBtn');
let scrollToAboutMenu = document.querySelector('#aboutBtnMenu');

scrollToAbout.addEventListener('click', function() {
    smoothScroll('.about');
});

scrollToAboutMenu.addEventListener('click', function() {
    smoothScrollMenu('.about');
});