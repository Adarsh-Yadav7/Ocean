// Toggle mobile menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animate elements on scroll
const scrollElements = document.querySelectorAll('.fade-in, .scroll-reveal');

const elementInView = (el, offset = 150) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Run on initial load
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});

// ===== Scroll Progress Bar =====
const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let width = (scrollTop / docHeight) * 100;
    progressBar.style.width = width + "%";
});

// ===== Back to Top Button =====
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// ===== Parallax Hero Background =====
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    let offset = window.scrollY * 0.4; // adjust speed factor
    hero.style.backgroundPosition = `center ${offset}px`;
});
