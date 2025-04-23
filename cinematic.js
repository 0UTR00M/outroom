/*document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".intro").style.display = "block";
        document.querySelector(".container").classList.remove("hidden");
    }, 120000); // 4s delay to match animation
});
*/

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const intro = document.querySelector(".intro");
        const container = document.querySelector(".container");

        if (intro) {
            intro.style.display = "none"; // Remove cinematic after fadeOut
        }

        if (container) {
            container.classList.remove("hidden");
        }
    }, 123000); // 120s + 3s fadeOut duration
});
