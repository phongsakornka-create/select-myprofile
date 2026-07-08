// ===== State =====
let isDark = false;

// ===== Element References =====
const toggleButton = document.getElementById("theme-toggle");
const footer = document.getElementById("card-footer");
const profileName = document.getElementById("profileName");
const nameInput = document.getElementById("nameInput");

// ===== Event: สลับธีม =====
toggleButton.addEventListener("click", () => {
    isDark = !isDark;
    document.body.classList.toggle("dark", isDark);

    toggleButton.textContent = isDark
        ? "☀️ โหมดกลางวัน"
        : "🌙 โหมดกลางคืน";
});

// ===== Footer =====
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} — Deploy ด้วย GitHub Pages 🚀`;

// ===== เปลี่ยนชื่อ =====
const defaultName = "นาย พงศกร แก้วจันทร์";

nameInput.addEventListener("input", () => {
    profileName.textContent = nameInput.value.trim() || defaultName;
});