import "./styles/index.scss";
let Deck = require('./deck');
import startTimer from './scripts/timer';

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faStar, faSun);

// const cards = document.querySelectorAll(".match-card");
// cards.forEach(card => card.addEventListener('click', handleClick));
// function handleClick() {}

document.getElementById("start-timer").addEventListener('click', startTimer)

function _renderDeck() {
  document.getElementById("deck").innerHTML = "";
  const deck = new Deck().deck;
  console.log(deck);

  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement("div");
    let shape = document.createElement("span");
    
    switch (deck[i].shape) {
      case "moon":
        shape.innerHTML = icon({
          prefix: "fas",
          iconName: "moon",
        }).html;
        break;
      case "star":
        shape.innerHTML = icon({
          prefix: "fas",
          iconName: "star",
        }).html;
        break;
      case "sun":
        shape.innerHTML = icon({
          prefix: "fas",
          iconName: "sun",
        }).html;
        break;
    }

    shape.style.color = deck[i].color;
    shape.className = "shape";
    card.appendChild(shape);
    card.style.background = deck[i].background;
    card.className = "card";
    document.getElementById("deck").appendChild(card);
  }
}

_renderDeck();