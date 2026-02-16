const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const image = document.getElementById("mainImage");

const RSVP_LINK = "https://your-rsvp-link-here.com";

let scale = 1;
let clicks = 0;

const texts = [
  "No",
  "Are you sure?",
  "Really?",
  "Think again 🥺",
  "Pls 😭",
  "You sure anot 💍"
];

noBtn.addEventListener("click", () => {
  clicks++;
  scale *= 0.8;
  noBtn.style.transform = `scale(${scale})`;
  noBtn.innerText = texts[clicks] || "…";
});

yesBtn.addEventListener("click", () => {
  message.innerText = "YAY 💖 Redirecting you to the invite…";
  setTimeout(() => {
    window.location.href = RSVP_LINK;
  }, 1500);
});
