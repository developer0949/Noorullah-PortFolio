
const typingText = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Creative Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Mobile Navigation Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});


const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill all required fields!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your form is submitted successfully.";
    formMessage.style.color = "#d4af37";

    contactForm.reset();

});


// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".about, .skill-card, .project-card, .contact"
);

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// Active Navbar Link on Scroll

const sections = document.querySelectorAll("section[id]");
const navLinksActive = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinksActive.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
