const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.getElementById("year");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (
    (currentPage === "home" && href === "index.html") ||
    (currentPage === "about" && href === "about.html") ||
    (currentPage === "projects" && href === "projects.html") ||
    (currentPage === "contact" && href === "contact.html")
  ) {
    link.classList.add("is-active");
  }
});

if (year) {
  year.textContent = new Date().getFullYear();
}
