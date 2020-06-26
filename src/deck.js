let Card = require('./card');

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.deck = this.sampleDeck();
  }

  createDeck() {
    const shapes = ["star", "moon", "sun"];
    const colors = ["black", "grey", "white"];
    const backgrounds = ["red", "yellow", "blue"];

    for (let i = 0; i < shapes.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        for (let k = 0; k < backgrounds.length; k++) {
          this.cards.push(new Card(shapes[i], colors[j], backgrounds[k]));
        }
      }
    }
  }

  sampleDeck() {
    const deck = [];
    const indices = [-1];
    
    while (indices.length <= 16) {
      const index = Math.floor(Math.random() * this.cards.length);
      const card = this.cards[index];
      if (!indices.includes(index)) {
        deck.push(card);
        indices.push(index);
      }
    }
    
    return deck;
  }
}

// d = new Deck();
// console.log(d.deck);
// console.log(d.deck.length);

module.exports = Deck;