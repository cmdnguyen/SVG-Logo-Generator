const {Triangle, Square, Circle} = require("./shapes")

describe("Circle", () => {
    test ("It should render a circle element", ()=> {
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
    test("Set Color changes the shapeColor property", () => {
      const circle = new Circle()
      circle.setColor("Green")
      expect(circle.shapeColor).toEqual("Green")
    })
})