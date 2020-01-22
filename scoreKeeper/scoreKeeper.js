var p1 = document.querySelector("#one");
var p2 = document.querySelector("#two");
var reset = document.querySelector("#reset");
var score = document.querySelector("#score");

var oneScore = document.querySelector("#oneScore");
var twoScore = document.querySelector("#twoScore");

var p1Score = 0;
var p2Score = 0;
var zero = 0;

var gameOver = false;
var winningScore = document.querySelector("#winningScore");
var score = document.querySelector("input");

score.addEventListener("change", function() {
  winningScore.textContent = score.value;
});

p1.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score == score.value) {
      oneScore.classList.add("winner");
      twoScore.classList.add("loser");
      gameOver = true;
    }
    oneScore.textContent = p1Score;
  }
});

p2.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score == score.value) {
      twoScore.classList.add("winner");
      oneScore.classList.add("loser");
      gameOver = true;
    }
    twoScore.textContent = p2Score;
  }
});

reset.addEventListener("click", function() {
  gameOver = false;
  oneScore.classList.remove("winner", "loser");
  twoScore.classList.remove("winner", "loser");
  oneScore.textContent = 0;
  twoScore.textContent = 0;
  p1Score = 0;
  p2Score = 0;
});
