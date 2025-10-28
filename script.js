// Simple fade effect when scrolling
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(15, 15, 25, 0.9)";
  } else {
    nav.style.background = "rgba(20, 20, 35, 0.8)";
  }
});
