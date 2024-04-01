class Shape {
    constructor (shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    pickShapeColor (shapeColor) {
        this.shapeColor = shapeColor
    };
    pickText (text) {
        this.text = text;
    };
    pickTextColor (textColor) {
        this.settextColor = textColor
    };


    
}

class Circle extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor)
    }
    render () {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
   
   </svg>`
    }
}

class Square extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor)
    }
}

    class Triangle extends Shape {
        constructor (shapeColor, text, textColor) {
            super (shapeColor, text, textColor)
        }
    }

    module.exports = Shapes;
    module.exports = { Circle, Square, Triangle};