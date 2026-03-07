// Grab elements
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const image = document.getElementById("mainImage");
const overlay = document.getElementById("overlay");

// RSVP link
const RSVP_LINK = "https://pehziqi.my.canva.site/amosandziqi";

// Messages for each No click
const texts = [
  "Are you sure?",
  "Don't lie you are free",
  "YES YOU ARE FREE!"
];

let clicks = 0;
const REQUIRED_NO_CLICKS = texts.length; // 3 clicks
let scale = 1; // No button scale factor

// No button click logic
noBtn.addEventListener("click", () => {
  // Change No button text
  noBtn.innerText = texts[clicks] || "…";

  // Change image to sad
  image.src = "sad.png";

  // Diminish No button gradually
  scale *= 0.8;
  noBtn.style.transform = `scale(${scale})`;

  // Increment click count
  clicks++;

  // Trigger Yes explosion after required No clicks
  if (clicks >= REQUIRED_NO_CLICKS) {
    // Show overlay
    overlay.style.display = "block";

    // Hide No button completely
    noBtn.style.display = "none";

    // Enlarge Yes button
    yesBtn.classList.add("big");

    // Optional message
    message.innerText = "just click yes. if really cannot you can reject us later...";
  }
});

// Yes button click logic
yesBtn.addEventListener("click", () => {
  // Change image back to happy
  image.src = "ChatGPT Image Mar 7, 2026, 06_58_49 PM.png";

  // Show redirect message
  message.innerText = "YAY! Redirecting you to the invite…";

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = RSVP_LINK;
  }, 1500);
});
