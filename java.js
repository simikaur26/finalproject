const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const target = tab.dataset.tab;
    tabContents.forEach(content => {
      content.classList.add("hidden");
    });
    document.getElementById(target).classList.remove("hidden");
  });
});

document.querySelectorAll(".tab-content").forEach(tab => {
  tab.addEventListener("click", e => {
    const card = e.target.closest(".image-card");
    if (card) {
      card.classList.toggle("active");
    }
  });
});

document.querySelectorAll(".book").forEach(book => {
    book.addEventListener("click", () => {
      book.classList.toggle("open");
    });
  });
  
// dark mode java //
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // moon and soon icon swap //
  const isDark = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
});

document.addEventListener("DOMContentLoaded", () => {
    const footerDate = document.getElementById("footer-date");
    const year = new Date().getFullYear();
    footerDate.textContent = year;
  });
