//Create a Triangle, Circle, and Square class constructor functions
//I thought of combining the constructors to clean up the code 
// but the svg return throws me off so i left it as 3 separate classes

class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    generateSVG() {
        return `<svg width="300" height="200">
                    <polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
                    <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
    }
}

class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    generateSVG() {
        return `<svg width="300" height="200">
                    <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
                    <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
    }
}

class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    generateSVG() {
        return `<svg width="300" height="200">
                    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
                    <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
    }
}

// using es6 because of inquirer package so exporting this way
export { Triangle, Circle, Square };


