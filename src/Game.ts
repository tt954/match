import Deck from './Deck';
import Card from './Card';
import { createShape, isValidMatch, isExistingMatch } from './utils';

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

    // from the deck created above, render each card based on its properties
    const deckContainer = document.querySelector('#deck');
    d.deck.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      // cardElement.dataset.cardId = card.id.toString();
      const { id, shape, color, backgroundColor } = card.getProperties();
      cardElement.style.backgroundColor = backgroundColor;
      const shapeElement = createShape(shape, color);
      cardElement.appendChild(shapeElement);
      deckContainer.appendChild(cardElement);

      // add listener on each card container to check for a match
      cardElement.addEventListener('click', () => {
        if (cardElement.classList.contains('clicked')) {
          cardElement.classList.remove('clicked');
          this.chosenCards = this.chosenCards.filter((c) => c.id !== id);
          if (this.chosenCards.length === 3) this.checkChosenCards();
        } else {
          cardElement.classList.add('clicked');
          this.chosenCards.push(card);
          if (this.chosenCards.length === 3) this.checkChosenCards();
        }
      });
    });
  }

  checkChosenCards() {
    const cardsToCheck = this.chosenCards.sort((a, b) => a.id - b.id);
    if (!isValidMatch(cardsToCheck)) {
      console.log('not a match');
    } else if (isExistingMatch(this.foundMatches, cardsToCheck)) {
      console.log('match already found');
    } else {
      this.score++;
      document.querySelector('#score').innerHTML = this.score.toString();
      this.foundMatches.push(cardsToCheck.map(({ id }) => id));
    }
    this.chosenCards = [];
    setTimeout(
      () =>
        document
          .querySelectorAll('.clicked')
          .forEach((c) => c.classList.remove('clicked')),
      1000
    );
  }
}

export default Game;
