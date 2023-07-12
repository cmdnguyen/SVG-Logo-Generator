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
  }
  
  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
            //triangle uniquely renders in svg
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="150,10 10,190 290,190" fill="${shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
  </svg>`
    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
      //square uniquely renders in svg
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rrect width="200" height="200" x="50" y="10" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
    }
  }
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    render() {
      //circle uniquely renders in svg
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
  </svg>`
    }
  }
  