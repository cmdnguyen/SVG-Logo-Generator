const {Triangle, Square, Circle} = require("./shapes")

shape = ({text, shapeColor, textColor}) => {
    let shape
     switch (shape) { 
        case "Circle":
            shape = new Circle();
            break;

        case "Square":
            shape = new Square()
     
        default:
            shape = new Triangle()
            break;
     }}


module.exports = generateSVG;