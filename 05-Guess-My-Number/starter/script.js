'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 8;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let gameEnded = false;
let currentHighscore = 0;

const updateHighscore = function (finalScore) {
  if (finalScore > currentHighscore) {
    currentHighscore = finalScore;
    document.querySelector('.highscore').textContent = finalScore;
  }
};

const updateMessage = function (newMessage) {
  document.querySelector('.message').textContent = newMessage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (gameEnded) return;

  if (!guess) {
    updateMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    updateMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    gameEnded = true;
    updateHighscore(score);
    return;
  } else if (guess < secretNumber) {
    updateMessage('📉 Too low!');
  } else if (guess > secretNumber) {
    updateMessage('📈 Too high!');
  }

  document.querySelector('.score').textContent = --score;
  if (score === 0) {
    updateMessage('💥 You lost!');
    gameEnded = true;
  }
});

const resetGame = function () {
  gameEnded = false;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
};

document.querySelector('.again').addEventListener('click', resetGame);
