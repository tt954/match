/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Card {\n    constructor(value, shape, color, backgroundColor) {\n        this.value = value;\n        this.shape = shape;\n        this.color = color;\n        this.backgroundColor = backgroundColor;\n    }\n    getProperties() {\n        return {\n            value: this.value,\n            shape: this.shape,\n            color: this.color,\n            backgroundColor: this.backgroundColor,\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n\n//# sourceURL=webpack://match/./src/Card.ts?");

/***/ }),

/***/ "./src/Deck.ts":
/*!*********************!*\
  !*** ./src/Deck.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/Card.ts\");\n\nclass Deck {\n    constructor(deckSize) {\n        this.deck = this.buildDeck(deckSize);\n    }\n    buildDeck(deckSize) {\n        const shapes = ['star', 'moon', 'sun'];\n        const colors = ['darkgrey', 'lightgrey', 'white'];\n        const backgroundColors = ['red', 'yellow', 'purple'];\n        const allCards = [];\n        for (let i = 0; i < shapes.length; i++) {\n            for (let j = 0; j < colors.length; j++) {\n                for (let k = 0; k < backgroundColors.length; k++) {\n                    allCards.push(new _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-1, shapes[i], colors[j], backgroundColors[k]));\n                }\n            }\n        }\n        const deck = []; // array of Card objects representing deck\n        const cardsDrawn = [-1]; // keep track of cards already drawn\n        while (cardsDrawn.length <= deckSize) {\n            const index = Math.floor(Math.random() * allCards.length);\n            const cardDrawn = allCards[index];\n            if (!cardsDrawn.includes(index)) {\n                cardDrawn.value = index;\n                deck.push(cardDrawn);\n                cardsDrawn.push(index);\n            }\n        }\n        return deck;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deck);\n\n\n//# sourceURL=webpack://match/./src/Deck.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deck */ \"./src/Deck.ts\");\n\nclass Game {\n    constructor() {\n        this.score = 0;\n        this.foundMatches = [[]];\n        this.chosenCards = []; // max length of 3\n    }\n    start() {\n        const d = new _Deck__WEBPACK_IMPORTED_MODULE_0__[\"default\"](16);\n        const deckContainer = document.querySelector('#deck');\n        d.deck.forEach((card) => {\n            const cardElement = document.createElement('button');\n            cardElement.classList.add('card');\n            cardElement.value = card.value.toString();\n            cardElement.style.backgroundColor = card.backgroundColor;\n            deckContainer === null || deckContainer === void 0 ? void 0 : deckContainer.appendChild(cardElement);\n        });\n        deckContainer === null || deckContainer === void 0 ? void 0 : deckContainer.addEventListener('click', (event) => {\n            const { target } = event;\n            if (target)\n                console.log(target.value);\n        });\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack://match/./src/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst startButton = (document.querySelector('#start'));\nconst restartButton = (document.querySelector('#restart'));\nconst startGame = () => {\n    console.log('Game started');\n    const g = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    g.start();\n};\nstartButton.addEventListener('click', startGame);\n\n\n//# sourceURL=webpack://match/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;