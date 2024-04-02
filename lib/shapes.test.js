const { Circle, Square, Triangle} = require('../lib/shapes');



describe('Circle', () => {
    describe('instance', () => {
        it('should be instance of Circle', () => {
            const circle = new Circle();
            expect(circle).tobeInstanceof(circle);
        })
    })
})

describe('Circle', () => {
    describe('Circle svg', () => {
        it('Should be circle svg with selected color', () => {
            const circle = new Circle();
            let color = 'blue';
            circle.setColor("blue");
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${color}" />
          
            <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
          </svg>`);
        })
    })
})


    