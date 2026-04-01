'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.guess').value = 23;

const body = document.querySelector('body');
const number = document.querySelector('.number');
const guess = document.querySelector('#guess');
const check = document.querySelector('.check');
// const message = document.querySelector('.message');
const score = document.querySelector('.score');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNum = Math.trunc(Math.random() * 20) + 1;
let scoreVal = 20;
let highscoreVal = 0;

const checkGuess = function () {
  if (guess.disabled) {
    return;
  }

  if (guess.value === '') {
    displayMessage('❌ No Number');
    // alert(`Enter a number between 1 and 20`);
    return;
  }

  const guessVal = Number(guess.value);

  // WHEN THE USER WILL GIVE NO INPUT
  if (guessVal < 1 || guessVal > 20) {
    // message.textContent = '❌ No Number';
    displayMessage(`⛔ Enter number between 1 and 20`);
    return;
  }
  // console.log(guessVal);

  // 🎯  GAME LOGIC STARTS HERE
  // WHEN THE INPUT IS EQUAL TO THE SECRET NUMBER
  if (guessVal === secretNum) {
    // message.textContent = '🌈 Correct Number';
    displayMessage('🌈 Correct Number');
    number.textContent = secretNum;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    // DISABLED
    guess.disabled = true;
    check.disabled = true;

    if (scoreVal > highscoreVal) {
      highscoreVal = scoreVal;
      highscore.textContent = highscoreVal;
    }
  }

  // WHEN THE INPUT IS WRONG
  else {
    if (scoreVal > 1) {
      // message.textContent = guessVal > secretNum ? ' Too high' : ' Too low';
      displayMessage(guessVal > secretNum ? 'Too high' : 'Too low');
      guess.value = '';
      guess.focus();
      scoreVal--;
      score.textContent = scoreVal;
    } else {
      // message.textContent = '😣 You lose- Try again';
      displayMessage('😣 You lose- Try again');
      score.textContent = 0;

      // DISABLED
      guess.disabled = true;
      check.disabled = true;
    }
  }

  // WHEN THE INPUT IS HIGH
  // else if (guessVal > secretNum) {
  //   if (scoreVal > 1) {
  //     message.textContent = ' Too high';
  //     scoreVal--;
  //     score.textContent = scoreVal;
  //   } else {
  //     message.textContent = '😣 You lose- Try again';
  //     score.textContent = 0;
  //   }
  // guess.value = '';
  // }

  // WHEN THE INPUT IS LOW
  // else if (guessVal < secretNum) {
  //   if (scoreVal > 1) {
  //     message.textContent = ' To low';
  //     scoreVal--;
  //     score.textContent = scoreVal;
  //   } else {
  //     message.textContent = '😣 You lose- Try again';
  //     score.textContent = 0;
  //   }
  // guess.value = '';
  //   }
};

check.addEventListener('click', checkGuess);

guess.addEventListener('keydown', e => {
  if (e.key === 'Enter') checkGuess();
});

again.addEventListener('click', function () {
  scoreVal = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  // message.textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  score.textContent = scoreVal;
  guess.value = '';
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';

  // DISABLED
  guess.disabled = false;
  check.disabled = false;

  guess.focus();
});
