// Simple alert on page load
window.onload = function () {
  console.log("Portfolio Loaded Successfully!");
};

// Smooth scroll behavior for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});
