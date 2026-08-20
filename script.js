/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   PROJECT FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        projects.forEach(project => {

            if (
                category === "all" ||
                project.dataset.category === category
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =========================
   BACK TO TOP
========================= */

const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Best Construction! We will get back to you shortly."
    );

    contactForm.reset();

});


/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


document
    .querySelectorAll(
        ".service-card, .project-card, .testimonial-card, .process-step"
    )
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all .7s ease";

        observer.observe(element);

    });


/* =========================
   HEADER SHADOW
========================= */

window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,.12)";

    }

});
