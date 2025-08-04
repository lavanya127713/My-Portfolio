// Scroll section activation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav ul li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href") === `#${current}`) {
      li.classList.add("active");
    }
  });
});

// Sidebar open/close toggle
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");

  // Optional: change icon (hamburger ↔ close)
  const icon = toggleBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});



