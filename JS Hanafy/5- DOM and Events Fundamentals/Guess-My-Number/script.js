'use strict';
// debugger;

/*
PROBLEMs:
  1. How to make random number between 1 ~ 20 ?
  2. How To Store The Random Number && The Score && The Highscore ?
  3. What if the Inputed Number wasn't a valid number (greater or less than the scope || string) ?
  4&5 How to Calculate The Score ?
  4. What If The Guessed Number Wasn't True ?
  5. What If The Guessed Number Was The True ?
  6. What Happen when click Again Button ?
===================================================================================================================================
SOULTIONs:
  1. Math.floor(Math.random() * 20) + 1 => Return Random Number Between 0 : 19 + 1 TO BE 1 : 20.
  2. Use Constant Object.
  3. If String Return Null And log An Error "Please, Enter A valid Number Between 1 and 20.", If Greater Change The Txt Of the Message Class > "📈 Too high!", if The opposite > "📉 Too low!".
    - What If It's Greater And Out Of Scope Or The Opposite ? 
    A: Log Warn To The Console "%cPlease, Enter A Number Between 1 ~ 20, You've Enterd ${guessedNum}", "color: yellow".
  4. Decrement The Current score by one 
    -- What If The Current Score Became Zero ? A: Chanege The background color to red and show him the number && Message= 💥 You Loss.. && change the width of the number class to 30rem 
  5. Change The Backgorund Color To Green && The Number Class  > The Random Number && The Message Class > "🎉 Correct Number!" && Compare The Previous Highstscore (Zero If It's First Time) With The Current Score; If The Current Is Greater Than The previous.
  6. Reset The Current Score To 20 And return The StyleSheet To What was.
*/

console.log(
  `%cThe Guess-My-Number Game Started`,
  'color: blue; font-size: 20px;'
);

const data = {
  init: {
    number: () => {
      data.number = Math.floor(Math.random() * 20) + 1;
      return data.number;
    },
    input: () => {
      data.input = document.querySelector('.guess');

      data.input.value = null;
      return data.input.value;
    },
    numClass: () => {
      data.numClass = document.querySelector('.number');
      if (typeof data.numClassBackup === 'undefined') {
        data.numClassBackup = {
          num: data.numClass.textContent,
          width: data.numClass.style.width,
          color: document.querySelector('body').style.backgroundColor,
        };
      }
      data.numClass.textContent = data.numClassBackup.num;
      data.numClass.style.width = data.numClassBackup.width;
      document.querySelector('body').style.backgroundColor =
        data.numClassBackup.color;
      return data.numClassBackup;
    },
    scoreClass: () => {
      data.score = document.querySelector('.score');
      data.score.value = data.score.textContent = 20;
      return Number(data.score.textContent);
    },
    highstScoreClass: () => {
      data.highstScore = document.querySelector('.highscore');
      if (typeof data.highstScore.value === 'undefined') {
        data.highstScore.value = data.highstScore.textContent = 0;
        return data.highstScore.textContent;
      } else {
        return data.highstScore.textContent;
      }
    },
    messageClass: () => {
      // debugger;
      data.messageClass = document.querySelector('.message');
      if (typeof data.messageClassBackup === 'undefined') {
        data.messageClassBackup = data.messageClass.textContent;
      }
      data.messageClass.textContent = data.messageClassBackup;
      return data.messageClassBackup.textContent;
    },
  },
};
function initiation() {
  data.init.number();
  data.init.input();
  data.init.numClass();
  data.init.scoreClass();
  data.init.highstScoreClass();
  data.init.messageClass();
}
initiation();
function guessMyNum() {
  // debugger;
  const numberfilter = function () {
    const guessedNum = Number(data.input.value);
    const state = isNaN(guessedNum)
      ? 'NaN'
      : guessedNum > 20 || guessedNum < 1
      ? 'OutScope'
      : guessedNum;
    if (state == 'NaN') {
      console.error(
        '%cPlease, Enter A valid Number Between 1 and 20.',
        'color: red; font-size: 15px;'
      );
      return 'Failure';
    } else if (state == 'OutScope') {
      display('⛔️ No number!');
      console.warn(
        `%cPlease, Enter A Number Between 1 ~ 20, You've Enterd ${guessedNum}`,
        'color: yellow'
      );
      return 'Failure';
    } else {
      return guessedNum;
    }
  };
  function display(message, bodyColor, disable) {
    data.messageClass.textContent = message;
    if (bodyColor) {
      document.querySelector('body').style.backgroundColor = bodyColor;
      data.numClass.style.width = '30rem';
    }
    if (disable) {
      // for (i = 0; i < disable.length; i++) {
      document.querySelector('.' + disable).disabled = true;
      // }
    }
  }
  function switcher(type) {
    data.numClass.textContent = data.number;
    if (type === 'success') {
      data.highstScore.value =
        data.score.value > data.highstScore.value
          ? data.score.value
          : data.highstScore.value;
      data.highstScore.textContent = data.highstScore.value;
      display('Winner, Winner Chicken Dinner..🐔', '#60b347', 'check');
    } else if ('loss') {
      display('💥 You Loss..', 'Red', 'check');
      data.score.value = data.score.textContent = 0;
    }
  }
  const guessedNum = numberfilter();

  const numChecker = function (guessedNum) {
    if (guessedNum == 'Failure') {
      // console.error('Failure')
      return 'Failure';
    } else if (guessedNum != data.number) {
      data.score.value--;
      if (data.score.value < 1) {
        switcher('loss');
      } else {
        display(guessedNum > data.number ? '📈 Too high!' : '📉 Too low!');
        data.score.textContent = data.score.value;
      }
    } else if (guessedNum == data.number) {
      switcher('success');
      console.log(
        `%cWinner, Winner Chicken Dinner..🐔`,
        'color: Green; font-size: 20px;'
      );
    }
  };
  console.log(guessedNum);
  return numChecker(guessedNum);
}

document.querySelector('.check').addEventListener('click', guessMyNum);
document.querySelector('.again').addEventListener('click', function () {
  initiation();
  document.querySelector('.check').disabled = false;
});
