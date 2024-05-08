//import fs, inquirer package, and 3 constructors from shapes.js
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');


// collecting prompt answers for text, color, and shape
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
            // validation to ensure string text is no longer that 3 characters
            validate: function (value) {
                return value.length > 0 && value.length <= 3 ? true : 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose the shape you want to create:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):'
        }
    ]);
}



function render(shape) {
  if (!shape || !shape.shapeType) {
      console.log('Invalid shape object.');
      return;
  }

  let svgContent = `<svg width="300" height="200">`;

  // Add shape based on shapeType
  switch (shape.shapeType.toLowerCase()) {
      case 'circle':
          svgContent += `<circle cx="150" cy="100" r="50" fill="${shape.shapeColor}" />`;
          break;
      case 'square':
          svgContent += `<rect x="50" y="50" width="200" height="100" fill="${shape.shapeColor}" />`;
          break;
      case 'triangle':
          svgContent += `<polygon points="150,50 100,150 200,150" fill="${shape.shapeColor}" />`;
          break;
      default:
          console.log('Invalid shape type.');
          return;
  }

  // Add text
  svgContent += `<text x="50%" y="50%" fill="${shape.textColor}" text-anchor="middle">${shape.text}</text>`;

  // Close SVG tag
  svgContent += `</svg>`;

  return svgContent;
}


async function main() {
  try {
      const answers = await promptUser();
//switch case supplied by ai assistant to determine proper shape to render
      let shape;
      switch (answers.shapeType.toLowerCase()) {
          case 'circle':
              shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
              break;
          case 'square':
              shape = new Square(answers.text, answers.textColor, answers.shapeColor);
              break;
          case 'triangle':
              shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
              break;
          default:
              console.log('Invalid shape type.');
              return;
      }

      const svgContent = shape.render(); // Call render() method of the shape object

      fs.writeFileSync('logo.svg', svgContent);
      console.log('Generated logo.svg');
  } catch (error) {
      console.error('An error occurred:', error);
  }
}

main();
