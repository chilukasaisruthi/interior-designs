// =====================================
// SHRUTHI INTERIOR DESIGNS
// JavaScript
// =====================================


// =====================================
// CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");


        // Check empty fields
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            subject === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color = "red";

            return;
        }


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }


        // Phone validation
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            formMessage.textContent =
                "Please enter a valid 10-digit phone number.";

            formMessage.style.color = "red";

            return;
        }


        // Success message
        formMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        formMessage.style.color = "green";


        // Clear form
        contactForm.reset();

    });

}


// =====================================
// BUTTON CLICK EFFECT
// =====================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log(
            "Button clicked: " + button.textContent.trim()
        );

    });

});


// =====================================
// PAGE LOAD MESSAGE
// =====================================

window.addEventListener("load", function() {

    console.log(
        "Welcome to Shruthi Interior Designs!"
    );

});