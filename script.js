document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded successfully!");

    const links = document.querySelectorAll("nav a, .details .links a, .calendar-link");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert("This is a placeholder link.");
        });
    });
});
