import Card from './Card';

export const isValidMatch = (chosenCards: Card[]) => {
  let shapes = new Set(),
    colors = new Set(),
    backgroundColors = new Set();
  chosenCards.forEach((c) => {
    shapes.add(c.shape);
    colors.add(c.color);
    backgroundColors.add(c.backgroundColor);
  });
  if (shapes.size === 2 || colors.size === 2 || backgroundColors.size === 2) {
    return false;
  } else {
    return true;
  }
};

export const isExistingMatch = (
  foundMatches: number[][],
  chosenCards: Card[]
) => {
  const chosenCardIds = chosenCards.map((c) => c.id);
  return foundMatches.some((match) =>
    chosenCardIds.every((cardId, index) => cardId === match[index])
  );
};

export const createShape = (shape: string, color: string) => {
  const shapeElement = document.createElement('i');
  shapeElement.classList.add('bi');
  shapeElement.classList.add(`bi-${shape}`);
  shapeElement.style.color = color;
  shapeElement.style.fontSize = '2.5rem';
  return shapeElement;
};
