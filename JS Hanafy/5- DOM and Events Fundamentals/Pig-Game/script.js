'use strict';

const players = {
  player1: {
    section: document.querySelector('.player--0'),
    name: document.querySelector('#name--0'),
    currentScore: document.querySelector('#current--0'),
    score: document.querySelector('#score--0'),
  },
  player2: {
    section: document.querySelector('.player--1'),
    name: document.querySelector('#name--1'),
    currentScore: document.querySelector('#current--1'),
    score: document.querySelector('#score--1'),
  },
};
const shapes = {
  new: document.querySelector('.btn--new'),
  roll: document.querySelector('.btn--roll'),
  hold: document.querySelector('.btn--hold'),
  dice: document.querySelector('.dice'),
};
const fetch = {
  init: {
    all: function () {
      fetch.diceImg('hide');
      fetch.init.firstRoller();
      fetch.init.numberReset('score');
      fetch.init.numberReset('currentScore');
      fetch.init.clickListening();
      players.player1.section.classList.remove('player--winner');
      players.player2.section.classList.remove('player--winner');
      shapes.roll.disabled = false;
      shapes.hold.disabled = false;
      players.player1.name.textContent = prompt(
        'Please, Enter Player One Name:- '
      );
      players.player2.name.textContent = prompt(
        'Please, Enter Player Two Name:- '
      );
    },
    numberReset: scoreType => {
      players.player1[scoreType].textContent = players.player1[
        scoreType
      ].value = 0;
      players.player2[scoreType].textContent = players.player2[
        scoreType
      ].value = 0;
    },
    firstRoller: () => {
      const luck = Math.trunc(Math.random() * 2) + 1;
      players[`player${luck}`].section.classList.add('player--active');
      players[`player${luck == 1 ? 2 : 1}`].section.classList.remove(
        'player--active'
      );
    },
    clickListening: () => {
      shapes.roll.addEventListener('click', rolling);
      shapes.hold.addEventListener('click', holding);
      shapes.new.addEventListener('click', fetch.init.all);
    },
  },
  toggle: () => {
    players.player1.section.classList.toggle('player--active');
    players.player2.section.classList.toggle('player--active');
  },
  diceImg: (type, imgNum) => {
    if (type === 'hide') return (shapes.dice.hidden = 1);
    shapes.dice.src = `dice-${imgNum}.png`;
    shapes.dice.hidden = 0;
  },
  scoring: (type, score, player) => {
    players[player][type].textContent = players[player][type].value += score;
  },
  winner: player => {
    players[player].section.classList.add('player--winner');
    shapes.roll.disabled = true;
    shapes.hold.disabled = true;
  },
};
fetch.init.all();
const generateNumber = () => Math.trunc(Math.random() * 6) + 1;
let checkPlayer = () =>
  players.player1.section.classList.contains('player--active')
    ? 'player1'
    : 'player2';

function rolling() {
  const player = checkPlayer();
  let number = generateNumber();
  fetch.diceImg('display', number);
  if (number - 1) {
    fetch.scoring('currentScore', number, player);
  } else {
    fetch.init.numberReset('currentScore');
    fetch.toggle();
  }
}

function holding() {
  const player = checkPlayer();
  fetch.scoring('score', players[player].currentScore.value, player);
  fetch.init.numberReset('currentScore');
  if (players[player].score.value >= 20) return fetch.winner(player);
  fetch.toggle();
}
