function searchWikipedia() {
    const searchTerm = document.getElementById('search').value;
    window.open(`https://ro.wikipedia.org/wiki/${searchTerm}`, '_blank');
}

// ==========================================
// Economic News
// script.js
// ==========================================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // Display current year in the footer
    // ==========================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            "© " + new Date().getFullYear() + " Economic News. All Rights Reserved.";
    }

    // ==========================================
    // Read More button functionality
    // ==========================================

    const readMoreBtn = document.getElementById("readMoreBtn");
    const extraNews = document.getElementById("extraNews");

    if (readMoreBtn && extraNews) {

        readMoreBtn.addEventListener("click", function () {

            if (extraNews.style.display === "block") {

                extraNews.style.display = "none";
                readMoreBtn.textContent = "Read More";

            } else {

                extraNews.style.display = "block";
                readMoreBtn.textContent = "Show Less";

                extraNews.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

    // ==========================================
    // Navbar hover animation
    // ==========================================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.08)";

        });

        link.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });

    // ==========================================
    // Fade-in animation
    // ==========================================

    document.body.style.opacity = "0";

    setTimeout(function () {

        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";

    }, 100);

});

// ==========================================
// Welcome message
// ==========================================

console.log("Welcome to Economic News!");