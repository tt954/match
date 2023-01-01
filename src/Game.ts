import Card from './Card';

class Game {
  private score: number;
  foundMatches: number[][];
  chosenCards: number[];

  constructor() {
    this.score = 0;
    this.foundMatches = [[]];
    this.chosenCards = []; // max length of 3
  }

  start(): void {
    const c1 = new Card(2, 'star', 'blue', 'white');
    const cardElement = <HTMLDivElement>document.createElement('div');
    cardElement.classList.add('card');
    cardElement.style.color = c1.getProperties().backgroundColor;
    document.querySelector('#deck')?.appendChild(cardElement);
  }
}
export default Game;
