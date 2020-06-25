let _ = require("underscore");
let Card = require('./card');

function Board () {
  this.board = _makeBoard();
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

function _makeBoard() {
  const board = [];

  for (let i = 0; i < 16; i++) {
    board.push(new Card());
  }

  let unique = false;
  while (!unique) {
    unique = true;

    for (let i = 0; i < board.length - 1; i++) {
      for (let j = 1; j < board.length; j++) {
        if (_.isEqual(board[i], board[j])) {
          board[j] = new Card();
        }
      }
    }
  }

  return board;
}

const _getAttribute = (cards, attribute) => {
  const attributes = [];
  cards.forEach((card) => {
    attributes.push(card[attribute]);
  });
  return attributes;
};

//testing purposes 

c1 = { shape: 1, color: 1, background: 2, selected: false };
c2 = { shape: 3, color: 1, background: 3, selected: false };
c3 = { shape: 2, color: 1, background: 1, selected: false };
c4 = { shape: 2, color: 1, background: 2, selected: false };
arr = [c1, c2, c3];
// console.log(_.uniq(_makeBoard()));
// console.log(_getAttribute(arr, "background"));
console.log(_makeBoard())

module.exports = Board;
