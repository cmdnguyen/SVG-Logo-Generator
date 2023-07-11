const inquirer = require("inquirer");
const { readFile, writeFile } = require('fs/promises');
const shapes = requre("./lib/shapes.js")


inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Please enter your brand initials (cannot be more than 3 characters)"
    },
    {
        type: "input",
        message: "What color would you like the text to be?",
        name: "textColor",
        
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like to use?",
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like the shape to be?"
    }

]).then((response) =>
    console.log(response))

