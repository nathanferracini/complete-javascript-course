'use strict';

const score0Element = document.querySelector('#score--0');
const currentScore0Element = document.querySelector('#current--0');
const sectionPlayer0 = document.querySelector('.player--0');

const score1Element = document.getElementById('score--1');
const currentScore1Element = document.querySelector('#current--1');
const sectionPlayer1 = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playerCurrentScore, player1Score, player2Score, currentPlayer, playing;

const newGame = function () {
  player1Score = 0;
  player2Score = 0;
  playerCurrentScore = 0;
  currentPlayer = 0;
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player--winner');
  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');
  diceElement.classList.add('hidden');
  currentScore0Element.textContent = playerCurrentScore;
  currentScore1Element.textContent = playerCurrentScore;
  updateCurrentScore();
  playing = true;
};
newGame();

btnRoll.addEventListener('click', function () {
  if (!playing) return;
  const diceNumber = Math.trunc(Math.random() * 6 + 1);

  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    playerCurrentScore += diceNumber;
  } else {
    playerCurrentScore = 0;
    updatePlayerScore();
  }
  updateCurrentScore();
});

function updateCurrentScore() {
  if (currentPlayer === 0) {
    currentScore0Element.textContent = playerCurrentScore;
  } else {
    currentScore1Element.textContent = playerCurrentScore;
  }
  score0Element.textContent = player1Score;
  score1Element.textContent = player2Score;
}

const updatePlayerScore = function () {
  if (!playing) return;
  if (currentPlayer === 0) {
    player1Score += playerCurrentScore;
  } else {
    player2Score += playerCurrentScore;
  }

  if (player1Score >= 50) {
    sectionPlayer0.classList.add('player--winner');
    sectionPlayer0.classList.remove('player--active');
    updateCurrentScore();
    playing = false;
    return;
  }

  if (player2Score >= 50) {
    sectionPlayer1.classList.add('player--winner');
    sectionPlayer1.classList.remove('player--active');
    updateCurrentScore();
    playing = false;
    return;
  }

  playerCurrentScore = 0;
  updateCurrentScore();
  switchActivePlayer();
};

function switchActivePlayer() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
  sectionPlayer0.classList.toggle('player--active');
  sectionPlayer1.classList.toggle('player--active');
}

btnHold.addEventListener('click', updatePlayerScore);

btnNew.addEventListener('click', newGame);
