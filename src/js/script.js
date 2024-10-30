// Scroll function from Donovan Hutchinson's Level Up Your CSS Animation Skills Udemy course
// Detect request animation frame
const scroll =
    window.requestAnimationFrame ||
    // IE Fallback
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("is-visible");
        } else {
            element.classList.remove("is-visible");
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    const rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <=
                (window.innerHeight ||
                    document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight))
    );
}

// Smooth scroll function
const headerBtn = document.getElementById("header-btn");
const socialContact = document.getElementById("social-contact");
const contactForm = document.getElementById("contact");

function scrollToForm() {
    contactForm.scrollIntoView({ behavior: "smooth" }); // Top
}

headerBtn.addEventListener("click", scrollToForm);
socialContact.addEventListener("click", scrollToForm);

// No bots!
const contactFormNoBots = document.getElementById("contact-form-no-bots");
contactFormNoBots.parentNode.removeChild(contactFormNoBots);
