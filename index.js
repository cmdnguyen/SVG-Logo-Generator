//Imports Node packages
const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');

//Imports paths for questions and generateSVG function
const questions = require("./lib/questions.js")
const generateSVG = require("./lib/generateSVG.js")

//Initializes inquirer when NPM starts
inquirer.prompt(questions)
.then((response) => {
    console.log(response);
    const svg = generateSVG(response)
    writeFile("logo.svg", svg)
    console.log("\nGenerated logo.svg!")
})
//Will callback an error if it occurs in the promise before
.catch((error) => {
    console.log(error);
    console.log("\nOops! Something went wrong.")
})