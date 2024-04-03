document.addEventListener("DOMContentLoaded", function () {
  const videoFrame = document.querySelector(".video-frame");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentVideo = 0;

  const videos = videoFrame.querySelectorAll("iframe");
  videos[currentVideo].style.display = "block";

  prevBtn.addEventListener("click", () => {
    videos[currentVideo].style.display = "none";
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    videos[currentVideo].style.display = "block";
  });

  nextBtn.addEventListener("click", () => {
    videos[currentVideo].style.display = "none";
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].style.display = "block";
  });
});