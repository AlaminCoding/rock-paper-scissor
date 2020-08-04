var indexOne = 0;
var indexTwo = 0;
var youWin = 0;
var pcWin = 0;

setTimeout(function () {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";
}, 5000);

function insertAnimation(element, animationName) {
  if (element.style.animationName) {
    element.style.animationName = "";
  } else {
    element.style.animationName = animationName;
  }
}
function getRandomCard(cardElement, index) {
  cardElement.forEach((element) => {
    element.style.display = "none";
  });
  cardElement[index].style.display = "block";
}
var playBtn = document.getElementById("play");
playBtn.addEventListener("click", function () {
  var youRock = document.getElementById("init-you-rock");
  insertAnimation(youRock, "you-rock");
  var pcRock = document.getElementById("init-pc-rock");
  insertAnimation(pcRock, "pc-rock");

  setTimeout(() => {
    youRock.style.display = "none";
    indexOne = Math.floor(Math.random() * 3);
    var youCards = document.querySelectorAll(".you");
    getRandomCard(youCards, indexOne);

    pcRock.style.display = "none";
    indexTwo = Math.floor(Math.random() * 3);
    var pcCards = document.querySelectorAll(".pc");
    getRandomCard(pcCards, indexTwo);

    var youWinCount = document.getElementById("you-win-count");
    var pcWinCount = document.getElementById("pc-win-count");
    if (indexOne == indexTwo) {
      youWin = youWin;
      pcWin = pcWin;
    } else if (indexOne == 0 && indexTwo == 1) {
      pcWin++;
      pcWinCount.innerHTML = pcWin;
    } else if (indexOne == 0 && indexTwo == 2) {
      youWin++;
      youWinCount.innerHTML = youWin;
    } else if (indexTwo == 0 && indexOne == 1) {
      youWin++;
      youWinCount.innerHTML = youWin;
    } else if (indexTwo == 0 && indexOne == 2) {
      pcWin++;
      pcWinCount.innerHTML = pcWin;
    } else if (indexOne == 1 && indexTwo == 2) {
      pcWin++;
      pcWinCount.innerHTML = pcWin;
    } else if (indexOne == 2 && indexTwo == 1) {
      youWin++;
      youWinCount.innerHTML = youWin;
    }
  }, 1500);
  playBtn.disabled = true;
});

var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  var youCards = document.querySelectorAll(".you");
  youCards.forEach((element) => {
    element.style.display = "none";
  });
  var pcCards = document.querySelectorAll(".pc");
  pcCards.forEach((element) => {
    element.style.display = "none";
  });
  var youRock = document.getElementById("init-you-rock");
  var pcRock = document.getElementById("init-pc-rock");
  youRock.style.display = "block";
  pcRock.style.display = "block";
  youRock.style.animation = "";
  pcRock.style.animation = "";
  playBtn.disabled = false;
});
