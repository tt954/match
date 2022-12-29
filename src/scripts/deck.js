import Card from './Card';
import { SHAPES, COLORS } from './constants';

class Deck {
  constructor() {
    this.allCards = [];
    this._buildCards();
    this.deck = this._createDeck();
  }

  _buildCards() {
    const shapes = [SHAPES.STAR, SHAPES.MOON, SHAPES.SUN];
    const colors = [COLORS.DARKGREY, COLORS.LIGHTGREY, COLORS.WHITE];
    const backgrounds = [COLORS.RED, COLORS.YELLOW, COLORS.PURPLE];

    for (let i = 0; i < shapes.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        for (let k = 0; k < backgrounds.length; k++) {
          this.allCards.push(
            new Card(null, shapes[i], colors[j], backgrounds[k])
          );
        }
      }
    }
  }

  _createDeck() {
    const deck = [];
    const cardsDrawn = [-1];

    while (cardsDrawn.length <= 16) {
      const index = Math.floor(Math.random() * this.allCards.length);
      const card = this.allCards[index];
      if (!cardsDrawn.includes(index)) {
        card.id = index;
        deck.push(card);
        cardsDrawn.push(index);
      }
    }

    return deck;
  }
}

export default Deck;
