setTimeout(() => {
    const menuButton = document.getElementById("menu-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (menuButton && dropdownMenu) {
        menuButton.addEventListener("click", () => {
            dropdownMenu.classList.toggle("hidden");
        });
    }
}, 0); // Delay execution to ensure elements are rendered