import "./styles/index.scss";
import "./styles/intro.scss";
import "./styles/timer.scss";

let _ = require("underscore");
import * as GameAPIUtil from './scripts/game';

document.getElementById("click-to-play").addEventListener("click", GameAPIUtil.startGame);
document.getElementById("click-to-restart").addEventListener("click", function() { window.location.reload() });






