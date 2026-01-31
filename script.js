console.log("hello");
var button = document.getElementById("endButton");
var heroVideo = document.getElementById("heroVideo");
function showButton() {
  console.log("video ended");
  heroVideo.classList.add("video-dark");
  button.style.display = "block";
}
