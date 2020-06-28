let _ = require("underscore");

// return boolean indicating if matchArr is a match or not 
export function checkMatch(cards, matchArr) {
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
export function checkMatchArr(matches, matchArr) {
  for (let i = 0; i < matches.length; i++) {
    if (_.isEqual(matches[i], matchArr)) return true;
  }
  return false;
}