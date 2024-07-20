function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.to-top').style.display = 'block'
    } else {
        document.querySelector('.to-top').style.display = 'none'
    }
}

window.onscroll = () => {
    scrollFunction();
}

function headToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function showMenu() {
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('close-menu')) {
        menu.classList.add('show-menu');

        menu.classList.remove('close-menu');
    } else {
        menu.classList.add('close-menu');
        
        menu.classList.remove('show-menu');
    }
}