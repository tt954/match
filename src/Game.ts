import Deck from './Deck';
import Card from './Card';
import { removeCard, isValidMatch, isExistingMatch } from './utils';

class Game {
  private score: number;
  foundMatches: number[][];
  chosenCards: Card[];

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
      cardElement.dataset.cardId = card.id.toString();
      cardElement.innerHTML = card.shape;
      cardElement.style.color = card.color;
      cardElement.style.backgroundColor = card.backgroundColor;
      deckContainer?.appendChild(cardElement);
    });

    deckContainer?.addEventListener('click', (event: Event) => {
      const cardElement = event.target as HTMLButtonElement;
      const cardId = parseInt(cardElement.dataset.cardId);
      const card = d.getCardById(cardId);

      if (cardElement.classList.contains('clicked')) {
        cardElement.classList.remove('clicked');
        this.chosenCards = removeCard(cardId, this.chosenCards); // todo: does splice alter this.chosenCards
        if (this.chosenCards.length === 3) this.checkChosenCards();
      } else {
        cardElement.classList.add('clicked');
        this.chosenCards.push(card);
        if (this.chosenCards.length === 3) this.checkChosenCards();
      }
    });
  }

  checkChosenCards() {
    this.chosenCards = this.chosenCards.sort((a, b) => a.id - b.id);
    if (!isValidMatch(this.chosenCards)) {
      console.log('not a match');
    } else if (isExistingMatch(this.foundMatches, this.chosenCards)) {
      console.log('match already found');
    } else {
      this.score++;
      document.querySelector('#score').innerHTML =
        this.score.toString();
      this.foundMatches.push(this.chosenCards.map((c) => c.id));
    }
    this.chosenCards = [];
    document
      .querySelectorAll('.clicked')
      .forEach((c) => c.classList.remove('clicked'));
  }
}
export default Game;
