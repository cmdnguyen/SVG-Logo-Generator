// zParent class Shape

//Child Classes Triange, Circle, and Square

// Shapes all share what?
class Shape {
    constructor(text, textColor, shapeColor) {
      this.text= text
      this.textColor = textColor
      this.shapeColor = shapeColor
      //apply these properties
    }
//TODO: work on the setColor & setText function
    setColor(shapeColor)
    setText(text,textColor)
    render(){
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      //TODO: rendershape function
      <text x="150" y="125" font-size="45" text-anchor="middle" fill="${setText(textColor)}">${setText(text)}</text>
      
  </svg>`
    }
  }
  
  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
            //triangle uniquely renders in svg
      `<polygon points="150, 18 244, 182 56, 182" fill="${setColor(this.shapeColor)}" />`
    

    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
      //square uniquely renders in svg
      `<rect width="200" height="200" x="50" y="10" fill="${setColor(this.shapeColor)}" />`
    }
  }
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
      //circle uniquely renders in svg
      `<circle cx="150" cy="100" r="80" fill="${setColor(this.shapeColor)}" />`
    }
  }
  

  module.exports = {Triangle, Square, Circle}