// link
const google = document.getElementById("btn7");
const duckduck = document.getElementById("btn8");
const youtube = document.getElementById("btn9");
const twitcz = document.getElementById("btn10");

google.addEventListener("click", () => {
  window.location.href = "https://www.google.com/";
});

duckduck.addEventListener("click", () => {
  window.location.href = "https://duckduckgo.com/";
});

youtube.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/";
});

twitcz.addEventListener("click", () => {
  window.location.href = "https://www.twitch.tv/";
});
