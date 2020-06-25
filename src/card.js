var shapes = [1, 2, 3]; //["circle", "triangle", "square"]
var colors = [1, 2, 3]; //["red", "yellow", "blue"]
var backgrounds = [1, 2, 3]; //["R", "Y", "B"]

function Card () {
  this.shape = shapes[Math.floor(Math.random() * shapes.length)];
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  this.selected = false;
}

Card.prototype.select = function () {
  if (this.selected) {
    this.selected = false; 
  } else {
    this.selected = true;
  }
}

module.exports = Card;

