const shape = require('./lib/shapes');
const { Circle, Square, Triangle } = shape


function generateLogo(data) {
    let shape = data.shape;
    if(data.shape === 'Square') {
        shape = new Square(data.shapeColor, data.text, data.textColor);
    } else if(data.shape === 'Triangle') {
        shape = new Triangle(data.shapeColor, data.text, data.textColor);
    } else if(data.shape === 'Circle') {
        shape = new Circle(data.shapeColor, data.text, data.textColor);
    }
    return shape.render();
}

module.exports = generateLogo