document.addEventListener("DOMContentLoaded", () => {
  // 1. Intersection Observer for Fade-In Animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: stop observing once it has become visible
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadingElements = document.querySelectorAll(".fade-in");
  fadingElements.forEach((el) => observer.observe(el));

  // 2. Navbar background style on scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(10, 10, 14, 0.95)";
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
      navbar.style.padding = "0.5rem 0";
    } else {
      navbar.style.background = "rgba(10, 10, 14, 0.8)";
      navbar.style.boxShadow = "none";
      navbar.style.padding = "1rem 0";
    }
  });

  // 3. Smooth scrolling for anchor links (safari fallback since CSS handles most)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
