var indexOne = 0;
var indexTwo = 0;
var youWin = 0;
var pcWin = 0;

//Introduction Loading
setTimeout(function () {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";
}, 5000);

//Insert Animation for both side
function insertAnimation(element, animationName) {
  if (element.style.animationName) {
    element.style.animationName = "";
  } else {
    element.style.animationName = animationName;
  }
}

//Get Random Card for Computer
function getRandomCard(cardElement, index) {
  cardElement.forEach((element) => {
    element.style.display = "none";
  });
  cardElement[index].style.display = "block";
}
//Animation and Display Reset
function adReset(element) {
  element.style.display = "block";
  element.style.animation = "";
}
//Card Reset
function cardReset(domElement) {
  domElement.forEach((element) => {
    element.style.display = "none";
  });
}

//Player Card Click
var playerCardImg = document.getElementById("player-card-img");
var cardBtn = document.querySelectorAll(".player-card");
cardBtn.forEach((element, index) => {
  element.addEventListener("click", function () {
    playerCardImg.style.display = "none";
    var youRock = document.getElementById("init-you-rock");
    insertAnimation(youRock, "you-rock");
    var pcRock = document.getElementById("init-pc-rock");
    insertAnimation(pcRock, "pc-rock");
    playerChooseIndex = index;

    setTimeout(() => {
      pcRock.style.display = "none";
      indexTwo = Math.floor(Math.random() * 3);
      var pcCards = document.querySelectorAll(".pc");
      getRandomCard(pcCards, indexTwo);

      youRock.style.display = "none";
      var youCards = document.querySelectorAll(".you");
      youCards.forEach((element) => {
        element.style.display = "none";
      });
      youCards[playerChooseIndex].style.display = "block";
      indexOne = playerChooseIndex;

      //Determine Winner
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
    }, 1400);
  });
});

//Reset Button Click
var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  playerCardImg.style.display = "block";
  var leftCards = document.querySelectorAll(".you");
  cardReset(leftCards);
  var rightCards = document.querySelectorAll(".pc");
  cardReset(rightCards);
  var youRock = document.getElementById("init-you-rock");
  adReset(youRock);
  var pcRock = document.getElementById("init-pc-rock");
  adReset(pcRock);
});
