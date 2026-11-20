
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth reveal animation while scrolling
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

// Certificates: hidden until the visitor clicks
const certificateToggle = document.getElementById("certificateToggle");
const certificateGallery = document.getElementById("certificateGallery");

certificateToggle.addEventListener("click", () => {
  const isHidden = certificateGallery.hidden;

  certificateGallery.hidden = !isHidden;
  certificateToggle.setAttribute("aria-expanded", String(isHidden));

  if (isHidden) {
    certificateGallery.classList.remove("is-open");

    // Restart the reveal animation
    void certificateGallery.offsetWidth;
    certificateGallery.classList.add("is-open");

    certificateToggle.innerHTML =
      'Hide certificates <span class="button-arrow">↑</span>';

    setTimeout(() => {
      certificateGallery.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 100);
  } else {
    certificateToggle.innerHTML =
      'Explore my certificates <span class="button-arrow">↗</span>';
  }
});

// Open a certificate in a larger image viewer
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".certificate-card img").forEach(image => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    imageModal.classList.add("open");
    imageModal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

modalClose.addEventListener("click", closeModal);

imageModal.addEventListener("click", event => {
  if (event.target === imageModal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});
