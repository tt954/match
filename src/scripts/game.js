let _ = require("underscore");
let Deck = require("../deck");
import Swal from "sweetalert2";
import startTimer from "./timer";

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faStar, faSun);

export function startGame() {
  _renderDeck();
  startTimer();
  document
    .getElementsByClassName("game-container")[0]
    .classList.remove("hidden");
  document.getElementsByClassName("intro")[0].classList.add("hidden");
}

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

function _renderDeck() {
  document.getElementById("deck").innerHTML = "";
  const cardDivs = [];

  for (let i = 0; i < deck.length; i++) {
    let cardDiv = document.createElement("div");
    let shapeSpan = document.createElement("span");

    // add shapes to card 
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

    cardDiv.addEventListener("click", function () {
      let card = deck[i];

      if (this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        removeCard(card.id);
        checkThree(cardDivs);
      } else {
        this.classList.add("clicked");
        addCard(card.id);
        checkThree(cardDivs);
      }
    });

    cardDivs.push(cardDiv);
    document.getElementById("deck").appendChild(cardDiv);
  }
}

function addCard(cardId) {
  matchArr.push(cardId);
  console.log(matchArr)
}

function removeCard(cardId) {
  matchArr = _.without(matchArr, cardId);
  console.log(matchArr);
}

function checkThree(cardDivs) {
  if (matchArr.length === 3) {
    matchArr = matchArr.sort((a, b) => a - b);
    if (
      checkMatch(cards, matchArr) &&
      !checkMatchArr(matches, matchArr)
    ) {
      matchesCount++;
      score.innerHTML = matchesCount;
      matches.push(matchArr);
      console.log(matches);
      matchArr = [];
    } else if (!checkMatch(cards, matchArr)) {
      Swal.fire({
        position: "top-end",
        text: "Not a match",
        showConfirmButton: false,
        timer: 800,
      });
      matchArr = [];
    } else if (checkMatchArr(matches, matchArr)) {
      Swal.fire({
        position: "top-end",
        text: "Already answered",
        showConfirmButton: false,
        timer: 800,
      });
      matchArr = [];
    } else {
      matchArr = [];
    }

    cardDivs.forEach((cardDiv) => cardDiv.classList.remove("clicked"));
  }
}

// return boolean indicating if matchArr is a match or not 
function checkMatch(cards, matchArr) {
  let shapes = [], colors = [], backgrounds = [];

  matchArr.forEach(cardId => {
    shapes.push(cards[cardId].shape)
    colors.push(cards[cardId].color)
    backgrounds.push(cards[cardId].background)
  });

  if (_.uniq(shapes).length == 2 || 
      _.uniq(colors).length == 2 || 
      _.uniq(backgrounds).length == 2) {
    return false;
  } else {
    return true;
  }
}

// return boolean if matchArr is included in matches 
function checkMatchArr(matches, matchArr) {
  for (let i = 0; i < matches.length; i++) {
    if (_.isEqual(matches[i], matchArr)) return true;
  }
  return false;
}