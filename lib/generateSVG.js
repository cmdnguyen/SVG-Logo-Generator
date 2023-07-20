const {Triangle, Square, Circle} = require("./shapes")

//Generates the SVG file based on the users input
const generateSVG = ({text, textColor, shapeColor,shape}) => {
    //Switch statement based on the user input on shape
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

