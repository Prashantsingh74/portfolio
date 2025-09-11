document.addEventListener("DOMContentLoaded", () => {
  // Optional: sticky nav color change (guarded so it doesn't break if .nav-cont is absent)
  const nav = document.querySelector(".nav-cont");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    });
  }

  const roles = ["Frontend Developer", "Freelancer"];
  const roleEl = document.getElementById("role");
  if (!roleEl) return; // safety: do nothing if #role isn't in the DOM

  let index = 0;          // which word
  let charIndex = 0;      // character pointer
  let isDeleting = false; // typing or deleting?

  const typeSpeed = 150;          // ms per letter (typing)
  const deleteSpeed = 100;        // ms per letter (deleting)
  const pauseBeforeDelete = 2000; // ms to wait after full word
  const pauseAfterDelete = 500;  // ms before typing next word

  function tick() {
    const text = roles[index];

    if (!isDeleting) {
      roleEl.textContent = text.substring(0, ++charIndex); // pre-increment fixes off-by-one
      if (charIndex === text.length) {
        isDeleting = true;
        setTimeout(tick, pauseBeforeDelete); // ✅ wait 2s with full word visible
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      roleEl.textContent = text.substring(0, --charIndex); // pre-decrement, no overshoot
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        setTimeout(tick, pauseAfterDelete); // small breather before next word
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


VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundAlpha: 0.0,   // 🔥 transparent background
  color: 0xff5a1f,        // particle color (orange)
  points: 12.0,           // number of points
  maxDistance: 25.0,      // line distance
  spacing: 20.0           // density
})
