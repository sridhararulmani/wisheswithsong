let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let solider = document.querySelector(".solider");

let canves = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

const horn = new Audio();
horn.src = "horn.mp3";
const popSound = new Audio();
popSound.src = "popSound.m4a";
const wishesSound = new Audio();
wishesSound.src = "wishesSound.m4a";

let firstWish = setTimeout(wish(), 100000);
function wish() {
  horn.play();
  wishesSound.play();
  popSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 600,
  });
  // horn.play();
  // popSound.play();
  // wishesSound.play();
}
next.addEventListener("click", function () {
  document.getElementById("song").play().loop;
  horn.play();
  popSound.play();
  wishesSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 600,
  });
  let slides = document.querySelectorAll(".slides");
  solider.appendChild(slides[0]);
});
prev.addEventListener("click", function () {
  document.getElementById("song").play().loop;
  horn.play();
  popSound.play();
  wishesSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 600,
  });
  let slides = document.querySelectorAll(".slides");
  solider.prepend(slides[slides.length - 1]);
});
