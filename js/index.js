let scrollTop = document.querySelector('.head')


window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 100){
        scrollTop.classList.add('active')
    }
    else {
        scrollTop.classList.remove('active')
    }
})