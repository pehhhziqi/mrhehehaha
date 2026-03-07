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

  // change image when No is clicked
  image.src = "sad.png";
});


yesBtn.addEventListener("click", () => {
  image.src = "happy.png";
  message.innerText = "YAY 💖 Redirecting you to the invite…";
  setTimeout(() => {
    window.location.href = RSVP_LINK;
  }, 1500);
});
