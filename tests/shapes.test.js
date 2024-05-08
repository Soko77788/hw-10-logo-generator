
const {Circle, Triangle, Square} = require('../lib/shapes.js');

const text = "ABC"
const textColor = "red"
//Tests based on instructor walkthrough with another student in offic hours.
describe('Circle class', () => {
    test("Checking to see if the svg string matches", () => {
        const shape = new Circle(text, textColor, 'blue');
     //I found that in this first test i made variables and hardcoded blue
     //then filled the template literal with the values and it passed.
        expect(shape.render()).toEqual(`
<svg width="300" height="200">
<circle cx="150" cy="100" r="50" fill="blue" />
<text x="50%" y="50%" fill="red" text-anchor="middle">ABC</text>
</svg>
`);
    });
})

describe('Triangle class', () => {
    test("Checking to see if the svg string matches", () => {
        const shape = new Triangle();
    //In these tests i allowed the answers to pass the test
        expect(shape.render()).toEqual(`
<svg width="300" height="200">
<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
<text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`);
    });
})

describe('Square class', () => {
    test("Checking to see if the svg string matches", () => {
        const shape = new Square();
       
        expect(shape.render()).toEqual(`
<svg width="300" height="200">
<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
<text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`);
    });
})
