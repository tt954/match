import Card from './Card';
import { SHAPES, COLORS } from './scripts/constants';

class Deck {
  deck: Card[];

  constructor(deckSize: number) {
    this.deck = this.buildDeck(deckSize);
  }

  private buildDeck(deckSize: number): Card[] {
    const shapes = [SHAPES.STAR, SHAPES.MOON, SHAPES.SUN];
    const colors = [COLORS.DARKGREY, COLORS.LIGHTGREY, COLORS.WHITE];
    const backgroundColors = [
      COLORS.RED,
      COLORS.YELLOW,
      COLORS.PURPLE,
    ];

    const allCards = [];
    for (let i = 0; i < shapes.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        for (let k = 0; k < backgroundColors.length; k++) {
          allCards.push(
            new Card(-1, shapes[i], colors[j], backgroundColors[k])
          );
        }
      }
    }

    const deck = []; // array of Card objects representing deck
    const cardsDrawn = [-1]; // keep track of cards already drawn
    while (cardsDrawn.length <= deckSize) {
      const index = Math.floor(Math.random() * allCards.length);
      const cardDrawn = allCards[index];
      if (!cardsDrawn.includes(index)) {
        cardDrawn.id = index;
        deck.push(cardDrawn);
        cardsDrawn.push(index);
      }
    }
    return deck;
  }

  getCardById(cardId: number): Card | undefined {
    return this.deck.find((card: Card) => card.id === cardId);
  }
}

export default Deck;
