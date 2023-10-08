// jupiter.js

document.addEventListener("DOMContentLoaded", function () {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, { threshold: 0.5 });

    animateOnScrollElements.forEach((element) => {
        observer.observe(element);
    });
});
