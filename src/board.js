let _ = require('underscore');
let Deck = require('./deck');

function Board () {
}

Board.prototype.checkMatch = function (pos1, pos2, pos3) {
  const card1 = this.board[pos1];
  const card2 = this.board[pos2];
  const card3 = this.board[pos3];

  const cards = [card1, card2, card3];
  const shapes = _getAttribute(cards, "shape");
  const colors = _getAttribute(cards, "color");
  const backgrounds = _getAttribute(cards, "background");
  const attributes = [shapes, colors, backgrounds];

  const attrVals = [];
  attributes.forEach((attribute) => {
    attrVals.push(sumArr(attribute));
  });

  const isMatchValue = (val) => val === 3 || val === 6 || val === 9;
  return attrVals.every(isMatchValue);
}

 // Helper Functions //

const sumArr = (arr) => arr.reduce((a, b) => a + b, 0);

function _renderBoard() {
  document.getElementById("deck").innerHTML = "";
  const deck = new Deck().deck;
  console.log(deck);

  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement("div");
    console.log(card);
    card.background = deck[i].background;
    card.className = "card";
    document.getElementById("deck").appendChild(card);
  }
}

const _getAttribute = (cards, attribute) => {
  const attributes = [];
  cards.forEach((card) => {
    attributes.push(card[attribute]);
  });
  return attributes;
};

//testing purposes 

console.log(_renderBoard());