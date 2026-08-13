const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const dotsContainer = document.querySelector(".carousel-dots");

let currentSlide = 0;

// Création des petits points
slides.forEach((_, index) => {
    const dot = document.createElement("button");

    dot.classList.add("carousel-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide();
    });

    dotsContainer.appendChild(dot);
    
});

const dots = document.querySelectorAll(".carousel-dot");

function showSlide() {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

nextButton.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide();
});

prevButton.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide();
});

// carouselle deplacement 5sec

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}, 5000);


// services Card rotation // 

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((mouseX - centerX) / centerX) * 10;

        const rotateX =
            ((centerY - mouseY) / centerY) * 10;

        card.style.transform = `
            perspective(700px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(700px)
            rotateX(0deg)
            rotateY(0deg)
        `;

    });

});




// burger  menu

const burgerButton = document.querySelector(".burger-button");
const navbarLinks = document.querySelector(".navbar-links");

burgerButton.addEventListener("click", () => {

    burgerButton.classList.toggle("active");
    navbarLinks.classList.toggle("active");

});


// Ferme le menu après avoir cliqué sur un lien

navbarLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        burgerButton.classList.remove("active");
        navbarLinks.classList.remove("active");

    });

});