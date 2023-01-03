import './styles/index.scss';
import './styles/intro.scss';
import './styles/timer.scss';

// import _ from 'underscore';
// import * as GameAPIUtil from './scripts/game';
import Game from './test';
import startTimer from './timer';

function startGame() {
  Game.renderDeck();
  startTimer();
  // start score at 0
  document.getElementById('score').innerHTML = '0';
  // show game container
  document.getElementById('game-container').display = 'block';
  // hide game instructions
  document.getElementById('instructions').display = 'none';
}

document
  .getElementById('click-to-play')
  .addEventListener('click', startGame());
document
  .getElementById('click-to-restart')
  .addEventListener('click', function () {
    window.location.reload();
  });
