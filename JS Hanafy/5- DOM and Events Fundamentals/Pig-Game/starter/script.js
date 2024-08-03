'use strict';

const sources = {
  sections: document.querySelectorAll('.player'),
  names: document.querySelectorAll('.name'),
  currentScoreClass: document.querySelectorAll('.current-score'),
  score: document.querySelectorAll('.score'),
  diceImg: document.querySelector('.dice'),
  btns: document.querySelectorAll('.btn'),
};

const gameData = {
  roll: {
    verfiy: () => {
      gameData.theOther =
        !gameData.player1.section.classList.contains('player--active') == true
          ? 'player1'
          : 'player2';
      return gameData.theOther == 'player2' ? 'player1' : 'player2';
    },
  },
  number: () => {
    return Math.trunc(Math.random() * 6) + 1;
  },
  swap: function (From, To) {
    gameData[From].section.classList.remove('player--active');
    gameData[To].section.classList.add('player--active');
  },
  player1: {},
  player2: {},
  theOther: null,
  rollBtn: null,
  holdBtn: null,
  resetBtn: null,
  init: {
    all: function () {
      for (let i = 0; i < sources.sections.length; i++) {
        const playerIndex = `player${i + 1}`;
        gameData[playerIndex].section = sources.sections[i];
        gameData[playerIndex].name = sources.names[i];
        gameData[playerIndex].currentScore = sources.currentScoreClass[i];
        gameData[playerIndex].currentScore.value = 0;
        gameData[playerIndex].score = sources.score[i];
        gameData[playerIndex].score.value = 0;
        gameData.init.currentScore(playerIndex);
        gameData.init.score(playerIndex);
        gameData.init.dice();
        if (i + 1 === sources.sections.length) {
          gameData.init.name('Khaled', 'Mohamed');
          gameData.init.firstRoller() == 1
            ? gameData.swap('player2', 'player1')
            : gameData.swap('player1', 'player2');
          gameData.resetBtn = sources.btns[i - 1];
          gameData.rollBtn = sources.btns[i];
          gameData.holdBtn = sources.btns[i + 1];
        }
      }
    },
    name: (player1, player2) => {
      gameData.player1.name.textContent = player1;
      gameData.player2.name.textContent = player2;
    },
    score: player => {
      gameData[player].score.textContent = gameData[player].score.value = 0;
    },
    currentScore: player => {
      gameData[player].currentScore.textContent = gameData[
        player
      ].currentScore.value = 0;
    },
    dice: () => {
      sources.diceImg.hidden = true;
    },
    firstRoller: () => {
      return Math.floor(Math.random() * 2) + 1;
    },
  },
};
gameData.init.all();

gameData.rollBtn.addEventListener('click', rolling);
gameData.holdBtn.addEventListener('click', holding);
gameData.resetBtn.addEventListener('click', gameData.init.all);
function holding() {
  const player = gameData.roll.verfiy();
  gameData[player].score.textContent = gameData[player].score.value +=
    gameData[player].currentScore.value;
  gameData.init.currentScore(player);
  if (gameData[player].score.value >= 50)
    return gameData[player].section.classList.add('player--winner');
  gameData.swap(player, gameData.theOther);
  // console.log(gameData[player].currentScore.value);
}

function rolling() {
  const player = gameData.roll.verfiy();
  const number = gameData.number();
  function calcCurruntScore(number) {
    if (number != 1) {
      gameData[player].currentScore.textContent = gameData[
        player
      ].currentScore.value += number;
    } else {
      gameData[player].currentScore.textContent = gameData[
        player
      ].currentScore.value = 0;
      gameData.swap(player, gameData.theOther);
    }
  }
  sources.diceImg.hidden = false;
  sources.diceImg.src = `dice-${number}.png`;
  calcCurruntScore(number);
}
