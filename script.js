'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.guess').value = 23;

const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');

const secretNum = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNum;
let scoreVal = 20;

check.addEventListener('click', function () {
  const guessVal = Number(guess.value);
  console.log(guessVal);

  if (!guessVal) {
    message.textContent = '❌ No Number';
  } else if (guessVal === secretNum) {
    message.textContent = '🌈 Correct Number';
  } else if (guessVal > secretNum) {
    if (scoreVal > 1) {
      message.textContent = ' Too high';
      scoreVal--;
      score.textContent = scoreVal;
    } else {
      message.textContent = '😣 You lose- Try again';
      score.textContent = 0;
    }
  } else if (guessVal < secretNum) {
    if (scoreVal > 1) {
      message.textContent = ' To low';
      scoreVal--;
      score.textContent = scoreVal;
    } else {
      message.textContent = '😣 You lose- Try again';
      score.textContent = 0;
    }
  }
  guess.value = '';
});
