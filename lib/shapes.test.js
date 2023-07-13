const {Circle} = require("./shapes")

describe("Circle", () => {
    test ("It should render a green circle with the text 'SVG' in white ", ()=> {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="white">SVG</text>
              </svg>`
      const circle = new Circle()
      circle.setColor("green")
      circle.setText("SVG") 
      circle.setTextColor("white")
      const actualSVG = circle.renderSVG()
      expect(actualSVG.replaceAll(" ","")).toEqual(expectedSVG.replaceAll(" ",""));
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