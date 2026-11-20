
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically update footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Reveal animations
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

// Certificate image viewer
const certificateModal =
  document.getElementById("certificateModal");

const modalImage =
  document.getElementById("modalImage");

const modalClose =
  document.getElementById("modalClose");

document.querySelectorAll("[data-certificate]").forEach(card => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.certificate;
    certificateModal.classList.add("active");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  });
});

function closeCertificate() {
  certificateModal.classList.remove("active");
  modalImage.src = "";
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeCertificate);

certificateModal.addEventListener("click", event => {
  if (event.target === certificateModal) {
    closeCertificate();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCertificate();
  }
});
