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
      const cardElement = document.createElement('button');
      cardElement.classList.add('card');
      cardElement.value = card.value.toString();
      cardElement.style.backgroundColor = card.backgroundColor;
      deckContainer?.appendChild(cardElement);
    });
    deckContainer?.addEventListener('click', (event: Event) => {
      const { target } = event;
      if (target) console.log((target as HTMLButtonElement).value);
    });
  }
}
export default Game;
