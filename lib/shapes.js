class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.render()}
      <text x="150" y="125" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect width="200" height="200" x="50" y="10" fill="${this.shapeColor}" />`;
  }
}
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = {Triangle, Square, Circle}