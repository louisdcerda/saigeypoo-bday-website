const countdownElement = document.getElementById("countdown");
const birthdayMessage = document.getElementById("birthdayMessage");
const heart = document.getElementById("heart");
const present = document.getElementById("present");
const song = document.getElementById("birthdaySong");
const openLetterButton = document.querySelector(".letter-tab button");
const letterContent = document.getElementById("letterContent");
const imagesContainer = document.getElementById("imagesContainer"); // Added for images

// Disable the "Open Your Letter" button initially
openLetterButton.disabled = true;

function countdownToBirthday() {
  // Set the correct birthday time in UTC
  const birthday = new Date("2024-11-17T05:00:00Z"); // Adjust as needed for timezone

  const now = new Date();
  const timeDiff = birthday - now;

  if (timeDiff <= 0) {
    countdownElement.textContent = "Happy 21st Saigeypoo!";
    showBirthdayMessage();
    // Enable the "Open Your Letter" button
    openLetterButton.disabled = false;
  } else {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

function showBirthdayMessage() {
  // Display birthday elements
  birthdayMessage.classList.remove("hidden");
  heart.classList.remove("hidden");
  present.classList.add("open");
  song.play();

  // Trigger confetti (only once)
  confetti({
    particleCount: 150, // Adjust the number of particles for a bigger burst
    startVelocity: 40,  // Adjust speed of the confetti particles
    spread: 360,        // Spread the confetti in all directions
    origin: {
      x: 0.5,  // Centered horizontally
      y: 0.5,  // Centered vertically
    },
    colors: ["#ff69b4", "#ff1493", "#ffc0cb", "#ffffff"], // Color palette
  });
}

function openLetter() {
  if (!openLetterButton.disabled) {
    letterContent.classList.toggle("hidden");

    // Show images after the letter is opened
    if (!letterContent.classList.contains("hidden")) {
      imagesContainer.classList.remove("hidden");
    }
  }
}

// Update countdown every second
setInterval(countdownToBirthday, 1000);
