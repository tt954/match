import _ from 'underscore';
import Deck from './Deck';
import Swal from 'sweetalert2';
import { isValidMatch, isExistingMatch } from './utils';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import {
  faMoon,
  faStar,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
library.add(faMoon, faStar, faSun);

class Game {
  constructor() {
    this.deck = new Deck(); // initiate a deck of random cards
    this.score = 0; // user score
    this.foundMatches = [0]; // array of found matches
    this.threeCards = []; // array of clicked cards, max length of 3
  }

  renderDeck() {
    const deckContainer = document.getElementById('deck');
    const cardContainers = [];

    for (let i = 0; i < this.deck.length; i++) {
      let cardContainer = document.createElement('div');
      let shapeContainer = document.createElement('span');

      // add icon according to the shape of each card
      switch (this.deck[i].shape) {
        case this.deck[i].shape:
          shapeContainer.innerHTML = icon({
            prefix: 'fas',
            iconName: deck[i].shape,
          }).html;
          break;
      }
      // update icon color
      shapeContainer.style.color = this.deck[i].color;
      shapeContainer.className = 'shape';
      cardContainer.appendChild(shapeContainer);
      // update card background color
      cardContainer.style.background = this.deck[i].background;
      cardContainer.className = 'card';

      cardContainer.addEventListener('click', function () {
        let card = this.deck[i];
        // ensure that the maximum number of clicked cards at any time is 3
        if (cardContainer.classList.contains('clicked')) {
          cardContainer.classList.remove('clicked');
          this._removeCard(card.id);
          this._checkThree(cardContainers);
        } else {
          cardContainer.classList.add('clicked');
          this._addCard(card.id);
          this._checkThree(cardContainers);
        }
      });

      cardContainers.push(cardContainer);
      deckContainer.appendChild(cardContainer);
    }
  }

  _addCard(addId) {
    this.threeCards.push(addId);
  }
  _removeCard(removeId) {
    this.threeCards = _.without(this.threeCards, removeId);
  }

  _checkThree(cardContainers) {
    if (this.threeCards.length === 3) {
      this.threeCards = this.threeCards.sort((a, b) => a - b);
      if (!isValidMatch(this.deck.allCards, this.threeCards)) {
        Swal.fire({
          position: 'top-end',
          text: 'Not a match',
          showConfirmButton: false,
          timer: 800,
        });
      } else if (
        isExistingMatch(this.foundMatches, this.threeCards)
      ) {
        Swal.fire({
          position: 'top-end',
          text: 'Already answered',
          showConfirmButton: false,
          timer: 800,
        });
      } else {
        this.matchesCount++;
        document.getElementById('score').innerHTML = matchesCount;
        foundMatches.push(threeCards);
      }
      threeCards = [];

      cardContainers.forEach((cardDiv) =>
        cardDiv.classList.remove('clicked')
      );
    }
  }
}

export default Game;
