document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-cont");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    });
  }

  const roles = ["Frontend Developer", "Freelancer"];
  const roleEl = document.getElementById("role");
  if (!roleEl) return;

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 150;
  const deleteSpeed = 100;
  const pauseBeforeDelete = 2000;
  const pauseAfterDelete = 500;

  function tick() {
    const text = roles[index];

    if (!isDeleting) {
      roleEl.textContent = text.substring(0, ++charIndex);
      if (charIndex === text.length) {
        isDeleting = true;
        setTimeout(tick, pauseBeforeDelete);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      roleEl.textContent = text.substring(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        setTimeout(tick, pauseAfterDelete);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  tick();
});
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const icon = hamburger.querySelector('i');

// Toggle menu
hamburger.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// Close menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

function showContact() {
  alert("Please contact me on (+91-8084008752 or prashant.kumar.singh1297@gmail.com) to request my CV.");
}

// Vanta.js background effect
let isMobile = window.innerWidth <= 768;

VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x007bff,
  backgroundAlpha: 0.0,
  points: isMobile ? 8.0 : 15.0,
  maxDistance: isMobile ? 10.0 : 20.0,
  spacing: isMobile ? 20.0 : 15.0,
})