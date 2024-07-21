const menu = document.querySelector('.menu');

function showMenu() {

    if (menu.classList.contains('show-menu')) {
        menu.classList.add('close-menu');

        menu.classList.remove('show-menu');
    } else {
        menu.classList.add('show-menu');
        
        menu.classList.remove('close-menu');
    }
}