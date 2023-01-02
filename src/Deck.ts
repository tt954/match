import Card from './Card';

class Deck {
  deck: Card[];

  constructor(deckSize: number) {
    this.deck = this.buildDeck(deckSize);
  }

  buildDeck(deckSize: number): Card[] {
    const shapes = ['star', 'moon', 'sun'];
    const colors = ['darkgrey', 'lightgrey', 'white'];
    const backgroundColors = ['red', 'yellow', 'purple'];

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
        cardDrawn.value = index;
        deck.push(cardDrawn);
        cardsDrawn.push(index);
      }
    }
    return deck;
  }
}

export default Deck;
