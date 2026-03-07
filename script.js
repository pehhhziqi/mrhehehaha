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

// No button click logic
noBtn.addEventListener("click", () => {
  // Update No button text if within array
  noBtn.innerText = texts[clicks] || "…";

  // Change image to sad
  image.src = "sad.png";

  // Show playful message
  message.innerText = "Hmm… really? Keep pressing No! 💖";

  // Increment click count
  clicks++;

  // Trigger Yes explosion after 3 clicks
  if (clicks >= REQUIRED_NO_CLICKS) {
    // Show overlay
    overlay.style.display = "block";

    // Hide No button
    noBtn.style.display = "none";

    // Enlarge Yes button
    yesBtn.classList.add("big");

    // Update message
    message.innerText = "Looks like it's time to say YES! 💖";
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
