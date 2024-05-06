const fs = require('fs');
const inquirer = require('inquirer');


// Questions to prompt users
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text (up to three characters):',
    validate: function (value) {
      return value.length > 0 && value.length <= 3 ? true : 'Please enter up to three characters.';
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (color keyword or hexadecimal number):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (color keyword or hexadecimal number):'
  }
];

