document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const navItems = document.querySelector('.nav-items');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }
    
    // Initialize the first slide
    showSlide(currentSlide);
    


    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            navItems.classList.add('active');
        } else {
            navItems.classList.remove('active');
        }
    });
});
