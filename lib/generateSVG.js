const {Triangle, Square, Circle} = require("./shapes")

const generateSVG = ({text, textColor, shapeColor,shape}) => {
    let userShape
     switch (shape) { 
        case "Circle":
            userShape = new Circle(text,textColor,shapeColor)
            break;

        case "Square":
            userShape = new Square(text,textColor,shapeColor)
        break;
        default:
            userShape = new Triangle(text,textColor,shapeColor)
            break;
     }
    return userShape.renderSVG()
    }


module.exports = generateSVG;

