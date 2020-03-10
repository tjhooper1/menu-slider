const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle navigation
toggle.addEventListener("click", () => {
    document.body.classList.toggle("show-nav");
});

// Show modal
open.addEventListener("click", () => {
    return modal.classList.add("show-modal");
});

// Hide modal
close.addEventListener("click", () => {
    return modal.classList.remove("show-modal");
});

//Hide modal on outside click
window.addEventListener("click", e => {
    return e.target == modal ? modal.classList.remove("show-modal") : false;
});
