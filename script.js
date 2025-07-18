// Toggle nav menu for mobile
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });

    // Optional: close menu on link click (mobile)
    document.querySelectorAll("#nav-links a").forEach(link => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("show");
      });
    });
  }
});
