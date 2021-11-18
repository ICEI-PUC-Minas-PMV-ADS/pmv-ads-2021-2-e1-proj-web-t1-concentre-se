const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navMobile = document.getElementById('nav-mobile');
    navMobile.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);