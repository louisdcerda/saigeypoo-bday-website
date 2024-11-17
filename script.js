const countdownElement = document.getElementById("countdown");
const birthdayMessage = document.getElementById("birthdayMessage");
const heart = document.getElementById("heart");
const present = document.getElementById("present");
const song = document.getElementById("birthdaySong");
const openLetterButton = document.querySelector(".letter-tab button");
const letterContent = document.getElementById("letterContent");
const imagesContainer = document.getElementById("imagesContainer"); 


openLetterButton.disabled = true;

function countdownToBirthday() {

  const birthday = new Date("2024-11-17T05:00:00Z"); // est 

  const now = new Date();
  const timeDiff = birthday - now;

  if (timeDiff <= 0) {
    countdownElement.textContent = "Happy 21st Saigeypoo!";
    showBirthdayMessage();

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
  birthdayMessage.classList.remove("hidden");
  heart.classList.remove("hidden");
  present.classList.add("open");
  song.play();

  confetti({
    particleCount: 150,
    startVelocity: 40,
    spread: 360,
    origin: {
      x: 0.5,  
      y: 0.5,  
    },
    colors: ["#ff69b4", "#ff1493", "#ffc0cb", "#ffffff"], 
  });
}

function openLetter() {
  if (!openLetterButton.disabled) {
    letterContent.classList.toggle("hidden");

    if (!letterContent.classList.contains("hidden")) {
      imagesContainer.classList.remove("hidden");
    }
  }
}

setInterval(countdownToBirthday, 1000);
