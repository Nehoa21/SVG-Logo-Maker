const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

// questions array
const questions = 
  [{
    // 3 letter logo
      type: 'input',
      name: 'name',
      message: 'Enter up to 3 characters.',
      validate: (value) => {
        if(value.length > 3) {
          return 'Logo has a maximum of 3 characters.'
        }
        return true;
      }
    },
    {
      // enter color name / hexadecimal number for text
      type: 'input',
      name: 'textColor',
      message: 'What color would you like for the text?',
    },
    {
      // choose shape
      type: 'list',
      name: 'shape',
      message: 'Choose a shape.',
      choices: 
        [
          'Circle',
          'Triangle',
          'Square',
        ],
    },
    {
      // enter color name / hexadecimal number for shape
      type: 'input',
      name: 'shapeColor',
      message: 'What color would you like for the shape?',
    },
  ];

// function to generate logo from user input
function generateLogo(answers) {
    // creating SVG file CSS 
  let svgFileString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  console.log(answers)

  let shapeChoice;
  // if / else to determine user shape choice
  if (answers.shape === 'Circle') {
    shapeChoice = new Circle();
    svgFileString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`;
  } else if(answers.shape === 'Triangle') {
    shapeChoice = new Triangle();
    svgFileString += `<polygon points="200,10 300,200 110,200" fill="${answers.shapeColor}"/>`
  } else if(answers.shape === 'Square') {
    shapeChoice = new Square();
    svgFileString += `<rect x="200" y="200" fill="${answers.shapeColor}"/>`
  }

  svgFileString += `${shapeChoice}`;
  svgFileString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.name}</text>`
  svgFileString += `</svg>`;
  
  return svgFileString;
}

// write file
function writeToFile(fileName, svgFileString) {  
  console.log(svgFileString)
  fs.writeFile(fileName, svgFileString, (err) => {
    err ? console.log(err) : console.log('Generated logo.svg');
  });
}

// initialize function
function init() {
  inquirer.prompt(questions)
    .then(function(answers){
      writeToFile('GeneratedLogo.svg', generateLogo(answers))
    });
}

// Function call to initialize app
init();