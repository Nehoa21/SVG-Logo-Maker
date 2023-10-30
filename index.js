const inquirer = require('inquirer');
const fs = require('fs');

// questions array
const questions = 
  [{
    // 3 letter logo
      type: 'input',
      name: 'name',
      message: 'Enter 3 letters.',
      validate: (value) => {
        if(value.length > 0 && value.length < 4) {
          return 'Logo has to be 3 letters.'
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
      writeToFile('logo.svg', generateLogo(data))
    });
}

// Function call to initialize app
init();