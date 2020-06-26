import "./styles/index.scss";

let _ = require("underscore");
let Deck = require('./deck');
import startTimer from './scripts/timer';

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faStar, faSun);

// const cards = document.querySelectorAll(".match-card");
// cards.forEach(card => card.addEventListener('click', handleClick));
// function handleClick() {}


const d = new Deck();
const cards = d.cards;
const deck = d.deck;
let matchesCount = 0;
const matches = [];
let matchArr = [];

const scoreSection = document.getElementById("score");
const score = document.createElement("div");
score.innerHTML = matchesCount;
scoreSection.appendChild(score);

document.getElementById("click-to-play").addEventListener("click", startTimer);

function _renderDeck() {
  document.getElementById("deck").innerHTML = "";

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
    card.addEventListener("click", card => addCard(deck[i]));
    card.className = "card";
    document.getElementById("deck").appendChild(card);
  }
}

_renderDeck();
console.log(deck);

function addCard(card) {
  if (matchArr.length < 3) {
    matchArr.push(card.id);
    console.log(matchArr);
  } else {
    matchArr = [];
    matchArr.push(card.id);
    console.log(matchArr); 
  }

  if (matchArr.length === 3) {
    if (checkMatch(matchArr) && !matches.includes(matchArr)) {
      matchesCount++;
      score.innerHTML = matchesCount;
      matches.push(matchArr);
    } else {
      return false;
    }
  }
}

function checkMatch(matchArr) {
  let shapes = [], colors = [], backgrounds = [];

  matchArr.forEach(cardId => {
    shapes.push(cards[cardId].shape)
    colors.push(cards[cardId].color)
    backgrounds.push(cards[cardId].background)
  });

  if (_.uniq(shapes).length === 2 || 
      _.uniq(colors).length === 2 || 
      _.uniq(backgrounds).length === 2) {
    return false;
  } else {
    return true;
  }
}

// need to fix:
// matches already entered exist in matches array, remove duplicates

