class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  pickShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  pickText(text) {
    this.text = text;
  }
  pickTextColor(textColor) {
    this.settextColor = textColor;
  }
}

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
              <rect x="50" y="65" width="150" height="150" fill="${this.shapeColor}"/>
              <text x="125" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
            <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
