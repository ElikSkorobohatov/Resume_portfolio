function smoothScroll(target) {
    let targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop-70,
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
            top: targetElement.offsetTop-70,
            behavior: 'smooth'
        });
    }
}



let addHomeBtnMenu = document.querySelector('#homesBtn');

addHomeBtnMenu.addEventListener('click', function() {
    smoothScroll('.top');
});



let scrollToAbout = document.querySelector('#aboutBtn');
let scrollToAboutMenu = document.querySelector('#aboutBtnMenu');

scrollToAbout.addEventListener('click', function() {
    smoothScroll('.about');
});

scrollToAboutMenu.addEventListener('click', function() {
    smoothScrollMenu('.about');
});



let scrollToSkill = document.querySelector('#skillBtn');
let scrollToSkillMenu = document.querySelector('#skillBtnMenu');

scrollToSkill.addEventListener('click', function() {
    smoothScroll('.program');
});

scrollToSkillMenu.addEventListener('click', function() {
    smoothScrollMenu('.program');
});


let scrollToExperience = document.querySelector('#experBtn');
let scrollToExperienceMenu = document.querySelector('#experBtnMenu');

scrollToExperience.addEventListener('click', function() {
    smoothScroll('.experience');
});

scrollToExperienceMenu.addEventListener('click', function() {
    smoothScrollMenu('.experience');
});


let scrollToPortfolio = document.querySelector('#portfBtn');
let scrollToPortfolioMenu = document.querySelector('#portfBtnMenu');

scrollToPortfolio.addEventListener('click', function() {
    smoothScroll('.portfolio');
});

scrollToPortfolioMenu.addEventListener('click', function() {
    smoothScrollMenu('.portfolio');
});

