document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const navItems = document.querySelector('.nav-items');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        slides[currentSlide]?.classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide]?.classList.add('active');
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    showSlide(currentSlide);

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            navItems.classList.add('active');
        } else {
            navItems.classList.remove('active');
        }
    });

    // ✅ Form submission
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;

            try {
                const response = await fetch('http://localhost:5000/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                });

                const data = await response.json();
                alert(data.message || 'Message sent!');
                form.reset();
            } catch (error) {
                alert('Error sending message.');
                console.error(error);
            }
        });
    }
});
