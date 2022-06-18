// TODO: Include packages needed for this application
var inquirer = require('inquirer');
inquirer
.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
])
.then((answers) => {})
.catch((error) => {
    if (error.isTtyError) {

    } else {

    }
});

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Creating ReadMe");
        FileSystem.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
this.init();
// or console.log