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

eval("__webpack_require__.r(__webpack_exports__);\nclass Card {\n    constructor(id, shape, color, backgroundColor) {\n        this.id = id;\n        this.shape = shape;\n        this.color = color;\n        this.backgroundColor = backgroundColor;\n    }\n    getProperties() {\n        return {\n            id: this.id,\n            shape: this.shape,\n            color: this.color,\n            backgroundColor: this.backgroundColor,\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n\n//# sourceURL=webpack://match/./src/Card.ts?");

/***/ }),

/***/ "./src/Deck.ts":
/*!*********************!*\
  !*** ./src/Deck.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/Card.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Deck {\n    constructor(deckSize) {\n        this.deck = this.buildDeck(deckSize);\n    }\n    buildDeck(deckSize) {\n        const shapes = [_constants__WEBPACK_IMPORTED_MODULE_1__.SHAPES.STAR, _constants__WEBPACK_IMPORTED_MODULE_1__.SHAPES.MOON, _constants__WEBPACK_IMPORTED_MODULE_1__.SHAPES.SUN];\n        const colors = [_constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.DARKGREY, _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.LIGHTGREY, _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE];\n        const backgroundColors = [\n            _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.RED,\n            _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.YELLOW,\n            _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.PURPLE,\n        ];\n        const allCards = [];\n        for (let i = 0; i < shapes.length; i++) {\n            for (let j = 0; j < colors.length; j++) {\n                for (let k = 0; k < backgroundColors.length; k++) {\n                    allCards.push(new _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-1, shapes[i], colors[j], backgroundColors[k]));\n                }\n            }\n        }\n        const deck = []; // array of Card objects representing deck\n        const cardsDrawn = [-1]; // keep track of cards already drawn\n        while (cardsDrawn.length <= deckSize) {\n            const index = Math.floor(Math.random() * allCards.length);\n            const cardDrawn = allCards[index];\n            if (!cardsDrawn.includes(index)) {\n                cardDrawn.id = index;\n                deck.push(cardDrawn);\n                cardsDrawn.push(index);\n            }\n        }\n        return deck;\n    }\n    getCardById(cardId) {\n        return this.deck.find((card) => card.id === cardId);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deck);\n\n\n//# sourceURL=webpack://match/./src/Deck.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deck */ \"./src/Deck.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\n\nclass Game {\n    constructor() {\n        this.score = 0;\n        this.foundMatches = [[]];\n        this.chosenCards = []; // max length of 3\n    }\n    start() {\n        const d = new _Deck__WEBPACK_IMPORTED_MODULE_0__[\"default\"](16);\n        const deckContainer = document.querySelector('#deck');\n        d.deck.forEach((card) => {\n            const cardElement = document.createElement('div');\n            // render cards based on their properties\n            cardElement.classList.add('card');\n            cardElement.dataset.cardId = card.id.toString();\n            cardElement.innerHTML = card.shape;\n            cardElement.style.color = card.color;\n            cardElement.style.backgroundColor = card.backgroundColor;\n            deckContainer === null || deckContainer === void 0 ? void 0 : deckContainer.appendChild(cardElement);\n        });\n        deckContainer === null || deckContainer === void 0 ? void 0 : deckContainer.addEventListener('click', (event) => {\n            const cardElement = event.target;\n            const cardId = parseInt(cardElement.dataset.cardId);\n            const card = d.getCardById(cardId);\n            if (cardElement.classList.contains('clicked')) {\n                cardElement.classList.remove('clicked');\n                this.chosenCards = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeCard)(cardId, this.chosenCards); // todo: does splice alter this.chosenCards\n                if (this.chosenCards.length === 3)\n                    this.checkChosenCards();\n            }\n            else {\n                cardElement.classList.add('clicked');\n                this.chosenCards.push(card);\n                if (this.chosenCards.length === 3)\n                    this.checkChosenCards();\n            }\n        });\n    }\n    checkChosenCards() {\n        this.chosenCards = this.chosenCards.sort((a, b) => a.id - b.id);\n        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isValidMatch)(this.chosenCards)) {\n            console.log('not a match');\n        }\n        else if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isExistingMatch)(this.foundMatches, this.chosenCards)) {\n            console.log('match already found');\n        }\n        else {\n            this.score++;\n            document.querySelector('#score').innerHTML =\n                this.score.toString();\n            this.foundMatches.push(this.chosenCards.map((c) => c.id));\n        }\n        this.chosenCards = [];\n        setTimeout(() => document\n            .querySelectorAll('.clicked')\n            .forEach((c) => c.classList.remove('clicked')), 850);\n        // document\n        //   .querySelectorAll('.clicked')\n        //   .forEach((c) => c.classList.remove('clicked'));\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack://match/./src/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst startButton = (document.querySelector('#start'));\nconst restartButton = (document.querySelector('#restart'));\nconst startGame = () => {\n    console.log('Game started');\n    const g = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    g.start();\n};\nstartButton.addEventListener('click', startGame);\n\n\n//# sourceURL=webpack://match/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isExistingMatch\": function() { return /* binding */ isExistingMatch; },\n/* harmony export */   \"isValidMatch\": function() { return /* binding */ isValidMatch; },\n/* harmony export */   \"removeCard\": function() { return /* binding */ removeCard; }\n/* harmony export */ });\nconst removeCard = (cardId, chosenCards) => {\n    return chosenCards.filter((c) => c.id !== cardId);\n};\nconst isValidMatch = (chosenCards) => {\n    let shapes = new Set(), colors = new Set(), backgroundColors = new Set();\n    chosenCards.forEach((c) => {\n        shapes.add(c.shape);\n        colors.add(c.color);\n        backgroundColors.add(c.backgroundColor);\n    });\n    if (shapes.size === 2 ||\n        colors.size === 2 ||\n        backgroundColors.size === 2) {\n        return false;\n    }\n    else {\n        return true;\n    }\n};\nconst isExistingMatch = (foundMatches, chosenCards) => {\n    const chosenCardIds = chosenCards.map((c) => c.id);\n    return foundMatches.some((match) => chosenCardIds.every((cardId, index) => cardId === match[index]));\n};\n\n\n//# sourceURL=webpack://match/./src/utils.ts?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COLORS\": function() { return /* binding */ COLORS; },\n/* harmony export */   \"SHAPES\": function() { return /* binding */ SHAPES; }\n/* harmony export */ });\nconst SHAPES = {\n  STAR: 'star',\n  MOON: 'moon',\n  SUN: 'sun',\n};\n\nconst COLORS = {\n  DARKGREY: '#231f20',\n  LIGHTGREY: '#9fb7b9',\n  WHITE: '#fff',\n  RED: '#fb3640',\n  YELLOW: '#F4E87C',\n  PURPLE: '#586BA4',\n};\n\n\n//# sourceURL=webpack://match/./src/constants.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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