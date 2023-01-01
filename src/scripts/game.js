import _ from 'underscore';
import Deck from './Deck';
import Swal from 'sweetalert2';
import startTimer from './timer';
import { isValidMatch, isExistingMatch } from './utils';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import {
  faMoon,
  faStar,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
library.add(faMoon, faStar, faSun);

export function startGame() {
  _renderDeck();
  startTimer();
  document
    .getElementsByClassName('game-container')[0]
    .classList.remove('hidden');
  document.getElementsByClassName('intro')[0].classList.add('hidden');
}

// const d = new Deck();
// const cards = d.allCards;
// const deck = d.deck;
// let matchesCount = 0;
// const foundMatches = [0];
// let threeCards = [];

// const score = document.getElementById('score');
// score.innerHTML = matchesCount;
// scoreSection.appendChild(score);

// function _renderDeck() {
//   document.getElementById('deck').innerHTML = '';
//   const cardContainers = [];

//   for (let i = 0; i < deck.length; i++) {
//     let cardContainer = document.createElement('div');
//     let shapeContainer = document.createElement('span');

//     // add icon according to the shape of each card
//     switch (deck[i].shape) {
//       case deck[i].shape:
//         shapeContainer.innerHTML = icon({
//           prefix: 'fas',
//           iconName: deck[i].shape,
//         }).html;
//         break;
//     }
//     // update icon color
//     shapeContainer.style.color = deck[i].color;
//     shapeContainer.className = 'shape';
//     cardContainer.appendChild(shapeContainer);
//     // update card background color
//     cardContainer.style.background = deck[i].background;
//     cardContainer.className = 'card';

//     cardContainer.addEventListener('click', function () {
//       let card = deck[i];
//       // ensure that the maximum number of clicked cards at any time is 3
//       if (this.classList.contains('clicked')) {
//         this.classList.remove('clicked');
//         removeCard(card.id);
//         checkThree(cardContainers);
//       } else {
//         this.classList.add('clicked');
//         addCard(card.id);
//         checkThree(cardContainers);
//       }
//     });

//     cardContainers.push(cardContainer);
//     document.getElementById('deck').appendChild(cardContainer);
//   }
// }

// const addCard = (cardId) => threeCards.push(cardId);
// const removeCard = (cardId) =>
//   (threeCards = _.without(threeCards, cardId));

// // check the three chosen/clicked cards
// function checkThree(cardContainers) {
//   if (threeCards.length === 3) {
//     threeCards = threeCards.sort((a, b) => a - b);
//     if (!isValidMatch(cards, threeCards)) {
//       Swal.fire({
//         position: 'top-end',
//         text: 'Not a match',
//         showConfirmButton: false,
//         timer: 800,
//       });
//     } else if (isExistingMatch(foundMatches, threeCards)) {
//       Swal.fire({
//         position: 'top-end',
//         text: 'Already answered',
//         showConfirmButton: false,
//         timer: 800,
//       });
//     } else {
//       matchesCount++;
//       score.innerHTML = matchesCount;
//       foundMatches.push(threeCards);
//     }
//     threeCards = [];

//     cardContainers.forEach((cardDiv) =>
//       cardDiv.classList.remove('clicked')
//     );
//   }
// }
