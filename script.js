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
