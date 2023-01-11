import Card from './Card';
import { SHAPES, COLORS } from './constants';

const createShapeElement = (shape: string, color: string) => {
  const shapeElement = document.createElement('i');
  shapeElement.classList.add('bi');
  shapeElement.classList.add(`bi-${shape}`);
  shapeElement.style.color = color;
  shapeElement.style.fontSize = '2.5rem';
  return shapeElement;
};
class Deck {
  deck: Card[];

  constructor(n: number) {
    this.deck = this.buildDeck(n);
  }

  private buildDeck(n: number): Card[] {
    const shapes = [SHAPES.STAR, SHAPES.MOON, SHAPES.SUN];
    const colors = [COLORS.DARKGREY, COLORS.LIGHTGREY, COLORS.WHITE];
    const backgroundColors = [COLORS.RED, COLORS.YELLOW, COLORS.PURPLE];

    // create a deck of all possible cards
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

    // randomly draw a deck, n size, from all possible cards
    const deck = []; // array of Card objects representing the game deck
    const cardsDrawn = [-1]; // keep track of cards already drawn
    while (cardsDrawn.length <= n) {
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
