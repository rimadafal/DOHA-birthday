
/* =================================
   1. ENVELOPE OPENING
================================= */

const openEnvelope = document.getElementById("openEnvelope");
const welcomeScreen = document.getElementById("welcomeScreen");

if (openEnvelope && welcomeScreen) {
    openEnvelope.addEventListener("click", function () {

        welcomeScreen.classList.add("hide");

        createHearts();

        // Take her to her personalized introduction
        setTimeout(function () {

            document.getElementById("about").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);

    });
}


/* =================================
   2. START BUTTON
================================= */

const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", function () {
        document.getElementById("memories").scrollIntoView({
            behavior: "smooth"
        });
    });
}


/* =================================
   3. FLOATING HEARTS
================================= */

function createHearts() {
    const heartsContainer = document.querySelector(".hearts");

    if (!heartsContainer) return;

    // Avoid creating hearts more than once
    if (heartsContainer.children.length > 0) return;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.innerHTML = "♡";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 5 + "s";
        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        heartsContainer.appendChild(heart);
    }
}


/* =================================
   4. BIRTHDAY COUNTDOWN
================================= */

function updateCountdown() {

    // November 21, 2026
    const birthday = new Date(2026, 10, 21, 0, 0, 0);

    const now = new Date();
    const difference = birthday - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const messageElement = document.getElementById("countdownMessage");

    if (!daysElement || !hoursElement ||
        !minutesElement || !secondsElement) {
        return;
    }

    if (difference <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        if (messageElement) {
            messageElement.textContent =
                "Happy Birthday, Bambi! It's your special day! ♡";
        }

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Start the countdown
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


/* =================================
   5. BIRTHDAY CAKE / BLOW CANDLE
================================= */

const blowButton = document.getElementById("blowButton");
const flame = document.getElementById("flame");
const wishMessage = document.getElementById("wishMessage");

if (blowButton) {

    blowButton.addEventListener("click", function () {

        // Hide the candle flame
        if (flame) {
            flame.style.display = "none";
        }

        // Display birthday wish
        if (wishMessage) {
            wishMessage.textContent =
                "Your wish is on its way, Bambi! Make it beautiful. ♡";
        }

        // Unlock the secret section
        const secretSection = document.getElementById("secret");

        if (secretSection) {
            secretSection.classList.add("unlocked");
        }

    });

}


/* =================================
   6. SECRET BIRTHDAY MESSAGE
================================= */

const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");

if (secretButton && secretMessage) {

    secretButton.addEventListener("click", function () {

        // Reveal the secret message
        secretMessage.classList.add("show");

        // Hide the reveal button
        secretButton.style.display = "none";

    });

}
