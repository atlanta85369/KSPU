/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}

/*=========================================
        STICKY NAVBAR
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "#00264d";
        navbar.style.padding = "14px 5%";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";

    }

    else {

        navbar.style.background = "rgba(0,51,102,.92)";
        navbar.style.padding = "16px 5%";
        navbar.style.boxShadow = "none";

    }

});

/*=========================================
        HERO IMAGE SLIDER
=========================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    if (slides.length === 0) return;

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide() {

    if (slides.length === 0) return;

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

showSlide(currentSlide);

if (slides.length > 1) {

    setInterval(nextSlide, 5000);

}

/*========== END OF PART 1 ==========*/
/*=========================================
        SLIDER BUTTONS
=========================================*/

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (prevBtn && slides.length) {

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = slides.length - 1;

        }

        showSlide(currentSlide);

    });

}

if (nextBtn && slides.length) {

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });

}

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".stat-card h2");

const runCounter = () => {

    counters.forEach(counter => {

        const text = counter.innerText.replace(/\D/g, "");
        const target = Number(text);

        if (!target) return;

        let count = 0;
        const step = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            count += step;

            if (count >= target) {

                count = target;
                clearInterval(timer);

            }

            const suffix = counter.innerText.replace(/[0-9]/g, "");
            counter.innerText = count + suffix;

        }, 20);

    });

};

let counterPlayed = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".statistics,.faculty-stats,.research-stats");

    if (stats && !counterPlayed) {

        const top = stats.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            counterPlayed = true;
            runCounter();

        }

    }

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(
    "section,.faculty-card,.teacher-card,.department-card,.research-card,.lab-card,.contact-card"
);

function revealOnScroll() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/*========== END OF PART 2 ==========*/
/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#0057B8",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    display: "none",
    zIndex: "9999",
    transition: ".3s"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
        CONTACT FORM
=========================================*/

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.borderColor = "red";
                valid = false;

            } else {

                input.style.borderColor = "#dcdcdc";

            }

        });

        if (valid) {

            alert("Your message has been sent successfully.");

            contactForm.reset();

        }

    });

}

/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

/*=========================================
        PAGE LOADED
=========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity .5s ease";

/*=========================================
        END OF FILE
=========================================*/