# SVG Logo Generator
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a generator that create a simple logo in a SVG file. It's a quick way to design a logo for any client. The generator can create logos in a shape of a triangle, square and circle.

When you run the program, there will be a prompt asking the user what they want for the logo including text, shape, the colors. The text cannot be more than three character since it needs to fit in the shape.

One of the challenging things about this project is creating the logo with the different Shape classes with the same properties. It took a while to figure out how I can define the classes with the properties.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#tests)

## Installation

To get started, users will have to use a terminal and clone the GitHub repository in their own directory.

	git clone git@github.com:cmdnguyen/SVG-Logo-Generator.git

Once cloned, users will need [VSCode](https://code.visualstudio.com/download) and open up the directory. In the terminal, you can use the following commands:

	cd SVG-Logo-Generator
	code .

Users will also need [NodeJS](https://nodejs.org/en) installed. I used the LTS version.

Users will need to initizalize npm and install the packages needed to run the program. Input the following commands in the terminal:

	npm init -y
	npm install

You should have a `package.json` file in the directory. When you go in the `package.json` file, you should see "inquirer" and "jest" in "dependencies." 
You should also see "test" and "start" in "scripts," which will be used to run the program.

## Usage

Once everything is installed, you can use the program. 

Here's a video demonstrating how the program works.

[VideoDemo]()

There are two ways to start the program. You can use one of the following commands.

    npm start
    node index.js

It will ask for inputs for the text, text color and shape color. For the "text" input, it cannot be more than three characters or you will see this error:

[TextError]()

Once you finished the prompts, the console should give you back the user response. Then, it should also say `Generated logo.svg` and created the file.

If not, it will throw an error and tells you `Oops! Something went wrong.`

## Credits

Boot Camp Tutor, Alexis Gonzalez

## License

MIT License

Copyright (c) 2023 Catherine Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

In the `lib` folder, there is a `shapes.test.js` file.

You can run the test file in the terminal. Input the following command:

    npm run test

The test is looking for 4 things. The first test should check for a green circle with the text "SVG" in white as the logo. The next three tests should check if it can change the properities.