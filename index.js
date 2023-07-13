const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');
const questions = require("./lib/questions.js")
const generateSVG = require("./lib/generateSVG.js")


inquirer.prompt(questions)
.then((response) => {
    console.log(response);
    const svg = generateSVG(response)
    writeFile("logo.svg", svg)
    console.log("\nGenerated logo.svg!")
})
.catch((error) => {
    console.log(error);
    console.log("\nOops! Something went wrong.")
})