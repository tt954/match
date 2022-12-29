import _ from 'underscore';

// return boolean indicating if the three cards picked is a correct match
export const isValidMatch = (cards, threeCards) => {
  let shapes = [],
    colors = [],
    backgrounds = [];

  threeCards.forEach((cardId) => {
    shapes.push(cards[cardId].shape);
    colors.push(cards[cardId].color);
    backgrounds.push(cards[cardId].background);
  });

  if (
    _.uniq(shapes).length == 2 ||
    _.uniq(colors).length == 2 ||
    _.uniq(backgrounds).length == 2
  ) {
    return false;
  } else {
    return true;
  }
};

// return boolean indicating if the match has already been found
export const isExistingMatch = (matches, threeCards) => {
  return matches.find((match) => _.isEqual(match, threeCards));
};
