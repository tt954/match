import "./styles/index.scss";

let _ = require("underscore");
let Deck = require('./deck');
import startTimer from './scripts/timer';
import * as GameAPIUtil from './scripts/game';

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faStar, faSun);

const d = new Deck();
const cards = d.cards;
const deck = d.deck;
let matchesCount = 0;
const matches = [0];
let matchArr = [];

const scoreSection = document.getElementById("score");
const score = document.createElement("div");
score.innerHTML = matchesCount;
scoreSection.appendChild(score);

document.getElementById("click-to-play").addEventListener("click", startTimer);

function _renderDeck() {
  document.getElementById("deck").innerHTML = "";

  for (let i = 0; i < deck.length; i++) {
    const card = deck[i];
    let cardDiv = document.createElement("div");
    let shapeSpan = document.createElement("span");
    
    switch (deck[i].shape) {
      case deck[i].shape:
        shapeSpan.innerHTML = icon({
          prefix: "fas",
          iconName: deck[i].shape,
        }).html;
        break;
    }

    shapeSpan.style.color = deck[i].color;
    shapeSpan.className = "shape";
    cardDiv.appendChild(shapeSpan);

    cardDiv.style.background = deck[i].background;
    cardDiv.className = "card";

    // (card) => addCard(deck[i]);

    cardDiv.addEventListener("click", function(card) {
      if (matchArr.length < 3 && 
        !matchArr.includes(card.id) &&
        this.classList.contains("clicked")) {
          matchArr.push(card.id);
          console.log(matchArr);
      } else {
        matchArr = [];
        matchArr.push(card.id);
        console.log(matchArr);
      }

      if (matchArr.length === 3) {
        matchArr.sort(function (a, b) {
          return a - b;
        });
        // console.log(matchArr)
        if (
          GameAPIUtil.checkMatch(cards, matchArr) &&
          !GameAPIUtil.checkMatchArr(matches, matchArr)
        ) {
          matchesCount++;
          score.innerHTML = matchesCount;
          matches.push(matchArr);
          // console.log(matches)
        }
      }
    });
    cardDiv.addEventListener("click", function () {
      if (this.classList.contains("clicked")) {
        console.log(this)
        this.classList.remove("clicked");
      } else {
        this.classList.add("clicked");
      }
    })
    
    document.getElementById("deck").appendChild(cardDiv);
  }
}

_renderDeck();

// add card.id clicked to matchArr
// reset matchArr to an empty array & test for a match once matchArr.length === 3 
function addCard(card) {
  if (matchArr.length < 3 && !matchArr.includes(card.id)) {
    matchArr.push(card.id);
    console.log(matchArr);
  } else {
    matchArr = [];
    matchArr.push(card.id);
    console.log(matchArr);
  }

  if (matchArr.length === 3) {
    matchArr.sort(function (a, b) {
      return a - b;
    });
    // console.log(matchArr)
    if (GameAPIUtil.checkMatch(cards, matchArr) && 
      !GameAPIUtil.checkMatchArr(matches, matchArr)) {
        matchesCount++;
        score.innerHTML = matchesCount;
        matches.push(matchArr);
        // console.log(matches)
    } 
  }
}



