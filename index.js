//DEPENDENCIES
const { prompt, default: inquirer } = require("inquirer");
const fs = require("fs");

inquirer
.prompt([{
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:'
},
{
    type: 'input',
    name: 'textColor',
    message: 'Text Color: Enter a color keyword or a hexadecimal number'
},
{
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape:',
    choices: ['Circle', 'Triangle', 'Square']
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Shape Color: Enter a color keyword or a hexadecimal number'
}

])

.then((data) => {
    fs.writeFile()
})



