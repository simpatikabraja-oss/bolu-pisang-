const hamburger = document.getElementById('hamburger-menu');
// Mengubah .nav-links menjadi .navbar-nav agar sesuai dengan HTML
const navLinks = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

// Ketika klik di luar sidebar untuk menutup nav
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
