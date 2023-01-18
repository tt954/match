import Game from './Game';
import startTimer from './scripts/timer.js';

const startButton = <HTMLButtonElement>document.querySelector('#start');
const restartButton = <HTMLButtonElement>document.querySelector('#restart');

const startGame = () => {
  // start game
  const g = new Game();
  g.start();
  // hide game instructions
  document.querySelector('#instructions').classList.add('hidden');
  startTimer();
};

startButton.addEventListener('click', startGame);
