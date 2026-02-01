console.log("hello");
var button = document.getElementById("endButton");
var heroVideo = document.getElementById("heroVideo");
function showButton() {
  console.log("video ended");
  heroVideo.classList.add("video-dark");
  button.style.display = "block";
}

const subNav = document.getElementById("subnav");
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] },
);
observer.observe(subNav);

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const testimonialCards = document.querySelectorAll(".testimonial-card");
let currentIndex = 0; // Start at the first card (index 0)

function showCard(index) {
  // 1. Hide all cards
  testimonialCards.forEach((card) => {
    card.style.setProperty("display", "none", "important");
  });

  // 2. Show only the active card
  testimonialCards[index].style.display = "block";
}

rightBtn.addEventListener("click", function () {
  // Move forward, loop to 0 if at the end
  currentIndex = (currentIndex + 1) % testimonialCards.length;
  showCard(currentIndex);
});

leftBtn.addEventListener("click", function () {
  // Move backward, loop to end if at 0
  currentIndex =
    (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
  showCard(currentIndex);
});

// Initialize the first view
showCard(currentIndex);
