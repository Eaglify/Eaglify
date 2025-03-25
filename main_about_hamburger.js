// menu-toggle and menu-overlay
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("menu-overlay");

    // clicked
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active"); 
        overlay.classList.toggle("active"); // Show overlay
    });

    // Close menu when clicking outside
    overlay.addEventListener("click", function () {
        menu.classList.remove("active"); 
        overlay.classList.remove("active"); 
    });
});
