const {Triangle, Square, Circle} = require("./shapes")

describe("Circle", () => {
    test ("It should render a green circle with the text 'SVG' in white ", ()=> {
        const expectedCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="white">SVG</text>
        </svg>`
      const circle = new Circle()
      circle.setColor("green")
      circle.setText("SVG") 
      circle.setTextColor("white")
      const actualCircle = circle.renderSVG()
      expect(actualCircle.replaceAll(" ","")).toEqual(expectedCircle.replaceAll(" ",""));
    })
    test("setText should changes the shapeColor property", () => {
      const circle = new Circle()
      circle.setColor("Green")
      expect(circle.shapeColor).toEqual("Green")
    })
    test("setText should change the text property", () => {
    const circle = new Circle()
    circle.setText("SVG")
    expect(circle.text).toEqual("SVG")
    })
    test("setTextColor should change the textColor property", () => {
      const circle = new Circle()
      circle.setTextColor("White")
      expect(circle.textColor).toEqual("White")
    })
  })

  describe("Triangle", () => {
    test("It should render a blue triangle with the text 'SLV' in gray", () => {
      const expectedTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue" />
      <text x="150" y="125" font-size="45" text-anchor="middle" fill="gray">SLV</text>
      </svg>`;
      const triangle = new Triangle();
      triangle.setColor("blue");
      triangle.setText("SLV");
      triangle.setTextColor("gray");
      const actualTriangle = triangle.renderSVG()
      expect(actualTriangle.replaceAll(" ","")).toEqual(expectedTriangle.replaceAll(" ",""));
    });
  });

  describe("Square", () => {
    test("It should render a yellow square with the text 'CMD' in black", () => {
      const expectedSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" x="50" y="10" fill="yellow" />
      <text x="150" y="125" font-size="45" text-anchor="middle" fill="black">CMD</text>
      </svg>`;
      const square = new Square();
      square.setColor("yellow");
      square.setText("CMD");
      square.setTextColor("black");
      const actualSquare = square.renderSVG()
      expect(actualSquare.replaceAll(" ","")).toEqual(expectedSquare.replaceAll(" ",""));
    });
  });