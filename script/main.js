// Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function () {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    //Display and hide about section
    document.getElementById('changeBtn').addEventListener('click', function () {
        const divToChange = document.querySelector('#divToChange');
        const divToCome = document.querySelector('#divToCome');
        divToChange.classList.toggle('hidden')
        divToCome.classList.toggle('hidden')
    })