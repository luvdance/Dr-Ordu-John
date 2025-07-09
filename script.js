document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
    const body = document.body; // To control body scrolling

    // Function to open the mobile menu
    function openMobileMenu() {
        mobileNav.classList.add("show-menu");
        mobileNavOverlay.classList.add("show-overlay");
        body.classList.add("no-scroll"); // Prevent body scrolling
    }

    // Function to close the mobile menu
    function closeMobileMenu() {
        mobileNav.classList.remove("show-menu");
        mobileNavOverlay.classList.remove("show-overlay");
        body.classList.remove("no-scroll"); // Allow body scrolling
    }

    // Toggle button click listener
    if (toggle) {
        toggle.addEventListener("click", () => {
            if (mobileNav.classList.contains("show-menu")) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Close menu when overlay is clicked
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener("click", () => {
            closeMobileMenu();
        });
    }

    // Close menu when a navigation link inside the mobile menu is clicked
    if (mobileNav) {
        mobileNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }

    // Close menu if user clicks anywhere else on the page (excluding the toggle and menu itself)
    // This uses event delegation on the document
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = mobileNav.contains(event.target);
        const isClickOnToggle = toggle && toggle.contains(event.target);

        if (mobileNav.classList.contains("show-menu") && !isClickInsideMenu && !isClickOnToggle) {
            closeMobileMenu();
        }
    });


    // Update current year for footer (keep this part)
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});