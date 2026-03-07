const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const image = document.getElementById("mainImage");

const RSVP_LINK = "https://pehziqi.my.canva.site/amosandziqi";

const texts = [
  "No",
  "Are you sure?",
  "Don't lie you are free",
  "Yes you are free",
  "Just press the yes",
  "Just press yes you can reject later"
];

let clicks = 0;

noBtn.addEventListener("click", () => {
  clicks++;

  // Change the No button text
  noBtn.innerText = texts[clicks] || "…";

  // Change image to sad
  image.src = "sad.png";

  // Hide the No button
  noBtn.style.display = "none";

  // Add "big" class to Yes button to make it explode
  yesBtn.classList.add("big");

  // Optional: update message
  message.innerText = "Hmm… really? Maybe this will help 💖";
});

// Yes button click logic (unchanged)
yesBtn.addEventListener("click", () => {
  image.src = "ChatGPT Image Mar 7, 2026, 06_58_49 PM.png";
  message.innerText = "YAY! Redirecting you to the invite…";
  setTimeout(() => {
    window.location.href = RSVP_LINK;
  }, 1500);
});
