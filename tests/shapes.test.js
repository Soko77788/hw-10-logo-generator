import {Circle, Triangle, Square} from '..lib/shapes.js';
import { expect } from '@jest/globals';
// const {Circle, Triangle, Square} = require('../lib/shapes.js');

const text = "ABC"
const textColor = "red"

describe('Circle class', () => {
    test("Testing stuff.", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`
<svg width="300" height="200">
<circle cx="150" cy="100" r="50" fill="blue" />
<text x="50%" y="50%" fill="red" text-anchor="middle">ABC</text>
</svg>
`);
    });
})

describe('Triangle class', () => {
    test("Testing stuff.", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`
<svg width="300" height="200">
<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
<text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`);
    });
})

describe('Square class', () => {
    test("Testing stuff.", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`
<svg width="300" height="200">
<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
<text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
</svg>
`);
    });
})
