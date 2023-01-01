type Properties = {
  value: number;
  shape: string;
  color: string;
  backgroundColor: string;
};

class Card {
  value: number;
  shape: string;
  color: string;
  backgroundColor: string;

  constructor(
    value: number,
    shape: string,
    color: string,
    backgroundColor: string
  ) {
    this.value = value;
    this.shape = shape;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }

  getProperties(): Properties {
    return {
      value: this.value,
      shape: this.shape,
      color: this.color,
      backgroundColor: this.backgroundColor,
    };
  }
}

export default Card;
