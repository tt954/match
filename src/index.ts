import Game from './Game';

const startButton = <HTMLButtonElement>(
  document.querySelector('#start')
);
const restartButton = <HTMLButtonElement>(
  document.querySelector('#restart')
);

const startGame = () => {
  console.log('Game started');
  const g = new Game();
  g.start();
};

startButton.addEventListener('click', startGame);
