const titles = ["Full Stack Web Developer", "UI/UX Designer", "Freelancer", "Tech Enthusiast,"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100; // Speed of typing in milliseconds
const deletingSpeed = 90; // Delay before starting to delete
const pauseBeforeDeleting = 1500; // Pause before starting to delete

function typeEffect() {
    const typingElement = document.getElementById("myTitle");
    const currentText = titles[titleIndex]; // full word stored in variable

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    // Ternary operator to determine delay
    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        delay = pauseBeforeDeleting; // Pause before starting to delete
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length; // Move to next title
    }

    setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// for submit button
document.querySelector(".submit-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission (if needed)
    
Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "Thank you for contacting us.",
})

});
