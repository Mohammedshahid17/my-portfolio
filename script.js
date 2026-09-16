// ================================
// PORTFOLIO JAVASCRIPT
// Mohammed Shahid
// ================================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

```
// --------------------------------
// 1. Navbar background on scroll
// --------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        header.style.background = "rgba(10, 10, 10, 0.75)";
    }

});


// --------------------------------
// 2. Smooth scrolling
// --------------------------------

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// --------------------------------
// 3. Active navigation link
// --------------------------------

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.style.color = "#aaa";

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.style.color = "#a78bfa";
        }

    });

});


// --------------------------------
// 4. Scroll reveal animation
// --------------------------------

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .contact-section"
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// --------------------------------
// 5. Typing effect
// --------------------------------

const title = document.querySelector(".hero h2");

const roles = [
    "AI & Data Science Student",
    "Developer",
    "Tech Enthusiast",
    "Future Data Scientist"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        title.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        title.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}


if (title) {
    typeEffect();
}


// --------------------------------
// 6. Project card interaction
// --------------------------------

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.01)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});


// --------------------------------
// 7. Current year in footer
// --------------------------------

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Mohammed Shahid. Built with passion.`;

}


// --------------------------------
// 8. Console message
// --------------------------------

console.log(
    "🚀 Mohammed Shahid's portfolio is running successfully!"
);
```

});

