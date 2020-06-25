import "./styles/index.scss";
import startTimer from './scripts/timer'

const cards = document.querySelectorAll(".match-card");
cards.forEach(card => card.addEventListener('click', handleClick));
document.getElementById("start-timer").addEventListener('click', startTimer)

function handleClick() {

}
