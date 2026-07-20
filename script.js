const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.onclick = () => {
    sidebar.classList.add("open");
};

closeBtn.onclick = () => {
    sidebar.classList.remove("open");
};

const contentsBtn = document.getElementById("contentsBtn");
const submenu = document.getElementById("submenu");

submenu.style.display = "none";

contentsBtn.onclick = () => {
    submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
};

// Close sidebar when a link is clicked
document.querySelectorAll(".sidebar a").forEach(link => {
    link.onclick = () => {
        sidebar.classList.remove("open");
    };
});
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});