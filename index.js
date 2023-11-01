const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo.js');
const { Circle, Square } = require('./lib/shapes.js');

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
      }
    },
    {
      // enter olor name / hexadecimal number for text
      type: 'input',
      name: 'text-color',
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
      name: 'shape-color',
      message: 'What color would you like for the shape?',
    },
  ];


let shapeChoice;
if (questions.shape === 'Circle') {
  shapeChoice = new Circle();
} else if(questions.shape === 'Triangle') {
  shapeChoice = new Triangle();
} else if(questions.shape === 'Square') {
  shapeChoice = new Square();
}

let svgLogoText = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
svgLogoText += `${questions.shape}`;
svgLogoText += shapeChoice;


// write file
  function writeToFile(fileName, data) {  
  fs.writeFile(fileName, data, (err) => {
    if(err) {
      console.log(err)
    }
    console.log('Generated logo.svg')
  });
}

// initialize function
function init() {
  inquirer.prompt(questions)
    .then(function(data){
      writeToFile('GeneratedLogo.svg', generateLogo(data))
    });
}

// Function call to initialize app
init();