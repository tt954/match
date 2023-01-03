export const removeCard = (cardId: number, chosenCards: number[]) => {
  const index = chosenCards.indexOf(cardId);
  if (index > -1) chosenCards.splice(index, 1);
  return chosenCards;
};
