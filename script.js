'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.
querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0,0];
let currentScore = 0;

// Use this to get the correct score of active player
let activePlayer = 0; 

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click',function () {
  //1. generate randome dice roll

  const dice = Math.trunc(Math.random() * 6 ) + 1;

  //2 display dice(remove hidden)
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
  //check if rolled 1. switch player
if (dice !== 1) {
  currentScore = currentScore + dice;
  // currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;

  // current0El.textContent = currentScore

}else{
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
}
});

//For New game button
btnNew.addEventListener('click', function () {
diceEl.classList.add('hidden')
document.getElementById(`current--${activePlayer}`).textContent = 0;
})
btnHold.addEventListener('click', function() {
  //1. add current score to active players score.
scores[activePlayer] += currentScore
// score + currentScore


  //2. Check if player's score is >= 100 and finish the game.

  //Switch to the next player.
})