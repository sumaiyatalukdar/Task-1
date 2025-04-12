// Toggle Theme
const toggleBtn = document.querySelector(".theme-toggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";
    body.setAttribute("data-theme", isDark ? "light" : "dark");
    toggleBtn.innerHTML = isDark ? "🌙" : "☀️";
  });
// Click Me Button
function showMessage() {
  alert("Thanks for visiting my webpage!");
}
