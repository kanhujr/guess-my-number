'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.guess').value = 23;

const number = document.querySelector('.number');
const guess = document.querySelector('#guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

let secretNum = Math.trunc(Math.random() * 20) + 1;
let scoreVal = 20;
let highscoreVal = 0;

check.addEventListener('click', function () {
  const guessVal = Number(guess.value);
  console.log(guessVal);

  // WHEN THE USER WILL GIVE NO INPUT
  if (!guessVal) {
    message.textContent = '❌ No Number';
  }

  // WHEN THE INPUT IS EQUAL TO THE SECRET NUMBER
  else if (guessVal === secretNum) {
    message.textContent = '🌈 Correct Number';
    number.textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scoreVal > highscoreVal) {
      highscoreVal = scoreVal;
      highscore.textContent = highscoreVal;
    }
  }

  // WHEN THE INPUT IS WRONG
  else if (guessVal !== secretNum) {
    if (scoreVal > 1) {
      message.textContent = guessVal > secretNum ? ' Too high' : ' Too low';
      scoreVal--;
      score.textContent = scoreVal;
    } else {
      message.textContent = '😣 You lose- Try again';
      score.textContent = 0;
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
});

again.addEventListener('click', function () {
  scoreVal = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  score.textContent = scoreVal;
  guess.value = '';
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
