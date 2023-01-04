type Properties = {
  id: number;
  shape: string;
  color: string;
  backgroundColor: string;
};

class Card {
  id: number;
  shape: string;
  color: string;
  backgroundColor: string;

  constructor(
    id: number,
    shape: string,
    color: string,
    backgroundColor: string
  ) {
    this.id = id;
    this.shape = shape;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }

  getProperties(): Properties {
    return {
      id: this.id,
      shape: this.shape,
      color: this.color,
      backgroundColor: this.backgroundColor,
    };
  }
}

export default Card;
