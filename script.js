// JavaScript untuk menambahkan kelas 'visible' saat elemen muncul di viewport
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project-card');
    const hero = document.querySelector('.hero');

    // Fungsi untuk mengecek visibilitas
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Tambahkan kelas 'visible' ke project card
        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top + scrollY;

            if (scrollY + windowHeight >= projectTop + 100) {
                project.classList.add('visible');
            }
        });

        // Tambahkan kelas 'visible' ke hero section
        const heroTop = hero.getBoundingClientRect().top + scrollY;
        if (scrollY + windowHeight >= heroTop) {
            hero.classList.add('visible');
        }
    }

    // Cek visibilitas saat scroll
    window.addEventListener('scroll', checkVisibility);
    // Cek visibilitas saat pertama kali memuat halaman
    checkVisibility();
});

// JavaScript untuk menambahkan kelas 'visible' saat project card muncul di viewport
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project-card');

    // Fungsi untuk mengecek visibilitas
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Tambahkan kelas 'visible' ke project card
        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top + scrollY;

            if (scrollY + windowHeight >= projectTop + 100) {
                project.classList.add('visible');
            }
        });
    }

    // Cek visibilitas saat scroll
    window.addEventListener('scroll', checkVisibility);
    // Cek visibilitas saat pertama kali memuat halaman
    checkVisibility();
});