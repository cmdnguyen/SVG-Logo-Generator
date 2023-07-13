const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter your brand initials (cannot be more than 3 characters)",
        maxLength: 3,
        validate: (text) => 
        text.length <= 3 ||
        "This cannot have more than 3 characters"
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
    },
    {
        type: "input",
        message: "What color would you like the text to be?",
        name: "textColor",
        
    }
]

module.exports = questions