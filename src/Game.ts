import Deck from './Deck';
import { removeCard } from './utils';

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
      const cardElement = document.createElement('button');
      // render cards based on their properties
      cardElement.classList.add('card');
      cardElement.value = card.value.toString();
      cardElement.style.backgroundColor = card.backgroundColor;
      deckContainer?.appendChild(cardElement);
    });

    deckContainer?.addEventListener('click', (event: Event) => {
      const cardElement = event.target as HTMLButtonElement;
      const cardId = parseInt(cardElement.value);
      if (cardElement.classList.contains('clicked')) {
        cardElement.classList.remove('clicked');
        this.chosenCards = removeCard(cardId, this.chosenCards); // todo: does splice alter this.chosenCards
      } else {
        cardElement.classList.add('clicked');
        this.chosenCards.push(cardId);
      }
    });
  }
}
export default Game;
