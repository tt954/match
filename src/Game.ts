import Deck from './Deck';

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
    const d = new Deck(16);
    const deckContainer = document.querySelector('#deck');
    d.deck.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.style.backgroundColor = card.backgroundColor;
      deckContainer?.appendChild(cardElement);
    });
  }
}
export default Game;
