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
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of Project',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
          console.log('Please enter a title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'what',
    message: 'What is your Project about?',
    validate: whatInput => {
      if (whatInput) {
        return true;
      } else {
          console.log('What is your Project about?');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you create this Project?',
    validate: whyInput => {
      if (whyInput) {
         return true;
      } else {
          console.log('Please enter a reason!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'how',
    message: 'How does your Project work?',
    validate: howInput => {
      if (howInput) {
        return true;
      } else {
          console.log('How does your Project work?');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can I install your Project?',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
          console.log('How can I install your Project?');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do I use your Project?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
          console.log('How do I use your Project?');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if (err) {
    reject(err);
    return;
  }
  resolve({
    ok: true,
    message: 'Your ReadMe file has been created.'
  });
};

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
};

// Function call to initialize app
this.init();
// or console.log