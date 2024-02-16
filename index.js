function checkTimeAndLoadVideoAndComments() {
  let currentTime = new Date();
  let startTimeVideo = new Date(currentTime);
  startTimeVideo.setHours(18, 0, 0);
  let endTimeVideo = new Date(currentTime);
  endTimeVideo.setHours(21, 0, 0);
  let startTimeBanner = new Date(currentTime);
  startTimeBanner.setHours(18, 20, 0);
  let endTimeBanner = new Date(currentTime);
  endTimeBanner.setHours(21, 0, 0);

  const videoPlayer = document.getElementById("videoPlayer");
  const videoPlayerMobile = document.getElementById("videoPlayerMobile");
  const backgroundAppElem = document.getElementById("backgroundApp");
  const backgroundMobileElem = document.getElementById("backgroundMobile");
  const titleBannerElem = document.querySelector(".main-info__body-h3");
  const banerElem = document.querySelector(".main-info__body-business");

  if (currentTime >= startTimeVideo && currentTime <= endTimeVideo) {
    backgroundAppElem.style.display = "none";
    backgroundMobileElem.style.display = "none";
    console.log("WORKING");
    if (window.innerWidth >= 1400) {
      videoPlayer.style.display = "block";
      videoPlayer.style.height = "530px";
      videoPlayer.style.width = "950px";
      videoPlayerMobile.style.display = "none";
    } else {
      videoPlayer.style.display = "none";
      videoPlayerMobile.style.display = "block";
      videoPlayerMobile.style.maxHeight = "500px";
    }
  } else {
    console.log("not working");
    if (window.innerWidth >= 1400) {
      backgroundAppElem.style.display = "block";
      backgroundMobileElem.style.display = "none";
    } else {
      backgroundAppElem.style.display = "none";
      backgroundMobileElem.style.display = "block";
    }
    videoPlayer.style.display = "none";
    videoPlayerMobile.style.display = "none";
  }

  if (currentTime >= startTimeBanner && currentTime <= endTimeBanner) {
    titleBannerElem.style.display = "block";
    banerElem.style.display = "flex";
  } else {
    titleBannerElem.style.display = "none";
    banerElem.style.display = "none";
  }
}

var intervalId = setInterval(checkTimeAndLoadVideoAndComments, 1000);

checkTimeAndLoadVideoAndComments();

window.addEventListener("resize", checkTimeAndLoadVideoAndComments);
