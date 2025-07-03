document.addEventListener('DOMContentLoaded', function () {
  // Toggle mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      nav.classList.remove('active');
      menuToggle.querySelector('i').classList.remove('fa-times');
    });
  });

  // Smooth scroll on click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  });

  // Intersection Observer for active nav item
  const sections = document.querySelectorAll('section[id]');
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navItem = document.querySelector(`nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        navItem.classList.add('active');
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

  // Contact form success message
  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("popupMessage");

  form.addEventListener("submit", function () {
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  });
});
