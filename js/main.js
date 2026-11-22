// * ScrollSpy active link while scrolling
window.addEventListener("load", function () {
  const scrollElement = document.body;

  const spy = new bootstrap.ScrollSpy(scrollElement, {
    target: "#mainNavbar",
    rootMargin: "-110px 0px -65%",
    threshold: [0, 0.1, 0.5, 1]
  });

  spy.refresh();
});

// * Close the mobile navigation after selecting a section
const navbarContent = document.getElementById("navbarContent");
const sectionLinks = document.querySelectorAll("#navbarContent .nav-link:not(.dropdown-toggle)");
sectionLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 992 && navbarContent.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarContent).hide();
    }
  });
});

// * Favorite property buttons
const favoriteButtons = document.querySelectorAll(".favorite-btn");
favoriteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const icon = button.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    button.classList.toggle("is-favorite");
  });
});

// * Prevent demo forms from reloading the page
const demoForms = document.querySelectorAll(".search-box, .contact-form");
demoForms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});
