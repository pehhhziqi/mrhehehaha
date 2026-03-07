const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const image = document.getElementById("mainImage");

const RSVP_LINK = "https://pehziqi.my.canva.site/amosandziqi";

let scale = 1;
let clicks = 0;

const texts = [
  "No",
  "Are you sure?",
  "Don't lie you are free",
  "Yes you are free",
  "Just press the yes",
  "Just press yes you can reject later"
];

noBtn.addEventListener("click", () => {
  clicks++;
  scale *= 0.8;

  noBtn.style.transform = `scale(${scale})`;
  noBtn.innerText = texts[clicks] || "…";

  // change image when No is clicked
  image.src = "sad.png";
});


yesBtn.addEventListener("click", () => {
  image.src = "ChatGPT Image Mar 7, 2026, 06_58_49 PM.png";
  message.innerText = "YAY 💖 Redirecting you to the invite…";
  setTimeout(() => {
    window.location.href = RSVP_LINK;
  }, 1500);
});
